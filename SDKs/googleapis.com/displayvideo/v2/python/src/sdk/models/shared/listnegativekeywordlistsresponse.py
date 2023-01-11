import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import negativekeywordlist as shared_negativekeywordlist


@dataclass_json
@dataclasses.dataclass
class ListNegativeKeywordListsResponse:
    r"""ListNegativeKeywordListsResponse
    Response message for NegativeKeywordListService.ListNegativeKeywordLists.
    """
    
    negative_keyword_lists: Optional[list[shared_negativekeywordlist.NegativeKeywordList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordLists') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
