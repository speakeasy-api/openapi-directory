import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MobileAppPlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    IOS = "IOS"
    ANDROID = "ANDROID"


@dataclass_json
@dataclasses.dataclass
class MobileApp:
    r"""MobileApp
    A mobile app promoted by a mobile app install line item.
    """
    
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    platform: Optional[MobileAppPlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    

@dataclass_json
@dataclasses.dataclass
class MobileAppInput:
    r"""MobileAppInput
    A mobile app promoted by a mobile app install line item.
    """
    
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    
