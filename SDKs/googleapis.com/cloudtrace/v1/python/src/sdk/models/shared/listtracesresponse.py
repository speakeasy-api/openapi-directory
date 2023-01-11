import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trace as shared_trace


@dataclass_json
@dataclasses.dataclass
class ListTracesResponse:
    r"""ListTracesResponse
    The response message for the `ListTraces` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    traces: Optional[list[shared_trace.Trace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traces') }})
    
