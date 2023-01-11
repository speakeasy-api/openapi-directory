import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    POST_DRAFTED = "POST_DRAFTED"
    POST_PUBLISHED = "POST_PUBLISHED"
    POST_DELETED = "POST_DELETED"
    POST_UNPUBLISHED = "POST_UNPUBLISHED"


@dataclass_json
@dataclasses.dataclass
class GoogleSearchIdeahubV1alphaIdeaActivity:
    r"""GoogleSearchIdeahubV1alphaIdeaActivity
    An idea activity entry.
    """
    
    ideas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ideas') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    topics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    type: Optional[GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
