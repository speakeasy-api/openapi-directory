import dataclasses
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceNotFoundProblemResourceTypeEnum(str, Enum):
    USER = "user"
    TWEET = "tweet"
    MEDIA = "media"


@dataclass_json
@dataclasses.dataclass
class ResourceNotFoundProblem:
    r"""ResourceNotFoundProblem
    A problem that indicates that a given Tweet, User, etc. does not exist.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    parameter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: ResourceNotFoundProblemResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
