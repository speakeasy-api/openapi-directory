import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DisallowedResourceProblemResourceTypeEnum(str, Enum):
    TWEET = "tweet"

class DisallowedResourceProblemSectionEnum(str, Enum):
    DATA = "data"
    INCLUDES = "includes"


@dataclass_json
@dataclasses.dataclass
class DisallowedResourceProblem:
    r"""DisallowedResourceProblem
    A problem that indicates that the resource requested violates the precepts of this API.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: DisallowedResourceProblemResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    section: DisallowedResourceProblemSectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
