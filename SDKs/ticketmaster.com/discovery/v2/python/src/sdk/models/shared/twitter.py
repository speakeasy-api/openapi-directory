import dataclasses
from typing import Optional
from enum import Enum

class TwitterHandleEnum(str, Enum):
    AT_A_TWITTER_HANDLE = "@a Twitter handle"


@dataclasses.dataclass
class Twitter:
    r"""Twitter
    Twitter data
    """
    
    handle: Optional[TwitterHandleEnum] = dataclasses.field(default=None)
    hashtags: Optional[list[str]] = dataclasses.field(default=None)
    
