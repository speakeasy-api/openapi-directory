import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SuggestedTagAndRegionQueryTokenSortByEnum(str, Enum):
    UNCERTAINTY_ASCENDING = "UncertaintyAscending"
    UNCERTAINTY_DESCENDING = "UncertaintyDescending"


@dataclass_json
@dataclasses.dataclass
class SuggestedTagAndRegionQueryToken:
    r"""SuggestedTagAndRegionQueryToken
    Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
    Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
    """
    
    continuation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuation') }, 'form': { 'field_name': 'continuation' }})
    max_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCount') }, 'form': { 'field_name': 'maxCount' }})
    session: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }, 'form': { 'field_name': 'session' }})
    sort_by: Optional[SuggestedTagAndRegionQueryTokenSortByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }, 'form': { 'field_name': 'sortBy' }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }, 'form': { 'field_name': 'tagIds' }})
    threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }, 'form': { 'field_name': 'threshold' }})
    
