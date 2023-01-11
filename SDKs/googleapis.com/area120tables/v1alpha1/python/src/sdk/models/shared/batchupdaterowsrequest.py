import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updaterowrequest as shared_updaterowrequest


@dataclass_json
@dataclasses.dataclass
class BatchUpdateRowsRequest:
    r"""BatchUpdateRowsRequest
    Request message for TablesService.BatchUpdateRows.
    """
    
    requests: Optional[list[shared_updaterowrequest.UpdateRowRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
