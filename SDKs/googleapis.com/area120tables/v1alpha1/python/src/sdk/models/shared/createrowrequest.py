import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import row as shared_row

class CreateRowRequestViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass_json
@dataclasses.dataclass
class CreateRowRequest:
    r"""CreateRowRequest
    Request message for TablesService.CreateRow.
    """
    
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    row: Optional[shared_row.Row] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    view: Optional[CreateRowRequestViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
