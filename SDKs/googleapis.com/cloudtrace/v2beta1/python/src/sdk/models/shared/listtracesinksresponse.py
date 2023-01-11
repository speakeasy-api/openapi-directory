import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tracesink as shared_tracesink


@dataclass_json
@dataclasses.dataclass
class ListTraceSinksResponse:
    r"""ListTraceSinksResponse
    Result returned from `ListTraceSinks`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sinks: Optional[list[shared_tracesink.TraceSink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sinks') }})
    
