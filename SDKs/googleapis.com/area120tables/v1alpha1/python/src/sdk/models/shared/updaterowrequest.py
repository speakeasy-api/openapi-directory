import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import row as shared_row

class UpdateRowRequestViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass_json
@dataclasses.dataclass
class UpdateRowRequest:
    r"""UpdateRowRequest
    Request message for TablesService.UpdateRow.
    """
    
    row: Optional[shared_row.Row] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    view: Optional[UpdateRowRequestViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
