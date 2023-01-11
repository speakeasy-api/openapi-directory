import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import row as shared_row


@dataclass_json
@dataclasses.dataclass
class BatchUpdateRowsResponse:
    r"""BatchUpdateRowsResponse
    Response message for TablesService.BatchUpdateRows.
    """
    
    rows: Optional[list[shared_row.Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
