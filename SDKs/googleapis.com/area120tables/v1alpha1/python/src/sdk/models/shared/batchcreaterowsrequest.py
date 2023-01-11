import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createrowrequest as shared_createrowrequest


@dataclass_json
@dataclasses.dataclass
class BatchCreateRowsRequest:
    r"""BatchCreateRowsRequest
    Request message for TablesService.BatchCreateRows.
    """
    
    requests: Optional[list[shared_createrowrequest.CreateRowRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
