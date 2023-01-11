import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlatformContextPlatformsEnum(str, Enum):
    DESKTOP = "DESKTOP"
    ANDROID = "ANDROID"
    IOS = "IOS"


@dataclass_json
@dataclasses.dataclass
class PlatformContext:
    r"""PlatformContext
    Output only. The type of platform the restriction applies to.
    """
    
    platforms: Optional[list[PlatformContextPlatformsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    
