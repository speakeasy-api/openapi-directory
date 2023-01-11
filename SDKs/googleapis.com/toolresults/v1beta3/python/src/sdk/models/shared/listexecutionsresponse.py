import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import execution as shared_execution


@dataclass_json
@dataclasses.dataclass
class ListExecutionsResponse:
    executions: Optional[list[shared_execution.Execution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
