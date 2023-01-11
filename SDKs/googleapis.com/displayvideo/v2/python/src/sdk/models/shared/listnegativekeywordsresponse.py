import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import negativekeyword as shared_negativekeyword


@dataclass_json
@dataclasses.dataclass
class ListNegativeKeywordsResponse:
    r"""ListNegativeKeywordsResponse
    Response message for NegativeKeywordService.ListNegativeKeywords.
    """
    
    negative_keywords: Optional[list[shared_negativekeyword.NegativeKeyword]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywords') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
