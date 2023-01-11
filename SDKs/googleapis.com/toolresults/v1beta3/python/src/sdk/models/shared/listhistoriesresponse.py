import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import history as shared_history


@dataclass_json
@dataclasses.dataclass
class ListHistoriesResponse:
    r"""ListHistoriesResponse
    Response message for HistoryService.List
    """
    
    histories: Optional[list[shared_history.History]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histories') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
