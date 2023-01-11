import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import useractivitysession as shared_useractivitysession


@dataclass_json
@dataclasses.dataclass
class SearchUserActivityResponse:
    r"""SearchUserActivityResponse
    The response from `userActivity:get` call.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sample_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRate') }})
    sessions: Optional[list[shared_useractivitysession.UserActivitySession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    total_rows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRows') }})
    
