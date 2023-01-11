import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MobileAppDirectoryEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    APPLE_APP_STORE = "APPLE_APP_STORE"
    GOOGLE_PLAY_STORE = "GOOGLE_PLAY_STORE"


@dataclass_json
@dataclasses.dataclass
class MobileApp:
    r"""MobileApp
    Contains information about a mobile app. Used as a landing page deep link.
    """
    
    directory: Optional[MobileAppDirectoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directory') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    publisher_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherName') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
