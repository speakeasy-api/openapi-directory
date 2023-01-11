import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1InstalledAppAppInstallTypeEnum(str, Enum):
    APP_INSTALL_TYPE_UNSPECIFIED = "APP_INSTALL_TYPE_UNSPECIFIED"
    MULTIPLE = "MULTIPLE"
    NORMAL = "NORMAL"
    ADMIN = "ADMIN"
    DEVELOPMENT = "DEVELOPMENT"
    SIDELOAD = "SIDELOAD"
    OTHER = "OTHER"

class GoogleChromeManagementV1InstalledAppAppSourceEnum(str, Enum):
    APP_SOURCE_UNSPECIFIED = "APP_SOURCE_UNSPECIFIED"
    CHROME_WEBSTORE = "CHROME_WEBSTORE"
    PLAY_STORE = "PLAY_STORE"

class GoogleChromeManagementV1InstalledAppAppTypeEnum(str, Enum):
    APP_TYPE_UNSPECIFIED = "APP_TYPE_UNSPECIFIED"
    EXTENSION = "EXTENSION"
    APP = "APP"
    THEME = "THEME"
    HOSTED_APP = "HOSTED_APP"
    ANDROID_APP = "ANDROID_APP"


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1InstalledApp:
    r"""GoogleChromeManagementV1InstalledApp
    Describes an installed app.
    """
    
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    app_install_type: Optional[GoogleChromeManagementV1InstalledAppAppInstallTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInstallType') }})
    app_source: Optional[GoogleChromeManagementV1InstalledAppAppSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSource') }})
    app_type: Optional[GoogleChromeManagementV1InstalledAppAppTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appType') }})
    browser_device_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDeviceCount') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    homepage_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepageUri') }})
    os_user_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osUserCount') }})
    permissions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
