import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightsvalue as shared_insightsvalue


@dataclass_json
@dataclasses.dataclass
class SearchKeywordCount:
    r"""SearchKeywordCount
    Represents a single search keyword and its value.
    """
    
    insights_value: Optional[shared_insightsvalue.InsightsValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insightsValue') }})
    search_keyword: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchKeyword') }})
    
