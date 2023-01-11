import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TwitterHandleEnum(str, Enum):
    AT_A_TWITTER_HANDLE = "@a Twitter handle"


@dataclass_json
@dataclasses.dataclass
class Twitter:
    r"""Twitter
    Twitter data
    """
    
    handle: Optional[TwitterHandleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handle') }})
    hashtags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashtags') }})
    
