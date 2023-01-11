import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchkeywordcount as shared_searchkeywordcount


@dataclass_json
@dataclasses.dataclass
class ListSearchKeywordImpressionsMonthlyResponse:
    r"""ListSearchKeywordImpressionsMonthlyResponse
    Represents the response for ListSearchKeywordImpressionsMonthly.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    search_keywords_counts: Optional[list[shared_searchkeywordcount.SearchKeywordCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchKeywordsCounts') }})
    
