import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DynamicLinkEventStatEventEnum(str, Enum):
    DYNAMIC_LINK_EVENT_UNSPECIFIED = "DYNAMIC_LINK_EVENT_UNSPECIFIED"
    CLICK = "CLICK"
    REDIRECT = "REDIRECT"
    APP_INSTALL = "APP_INSTALL"
    APP_FIRST_OPEN = "APP_FIRST_OPEN"
    APP_RE_OPEN = "APP_RE_OPEN"

class DynamicLinkEventStatPlatformEnum(str, Enum):
    DYNAMIC_LINK_PLATFORM_UNSPECIFIED = "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    DESKTOP = "DESKTOP"
    OTHER = "OTHER"


@dataclass_json
@dataclasses.dataclass
class DynamicLinkEventStat:
    r"""DynamicLinkEventStat
    Dynamic Link event stat.
    """
    
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    event: Optional[DynamicLinkEventStatEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    platform: Optional[DynamicLinkEventStatPlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
