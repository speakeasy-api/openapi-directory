import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostActivityActivityTypeEnum(str, Enum):
    CONTENT = "content"


@dataclass_json
@dataclasses.dataclass
class PostActivity:
    activity_type: PostActivityActivityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    occurred_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurred_at') }})
    
