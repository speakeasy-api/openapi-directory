import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserAgentInfoResponse:
    browser_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserName') }})
    engine: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    engine_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineVersion') }})
    is_android: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAndroid') }})
    is_ios: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isIos') }})
    is_mobile: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMobile') }})
    mobile_brand: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileBrand') }})
    mobile_browser: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileBrowser') }})
    mobile_model: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileModel') }})
    mobile_screen_height: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileScreenHeight') }})
    mobile_screen_width: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileScreenWidth') }})
    operating_system: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystem') }})
    operating_system_family: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemFamily') }})
    operating_system_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemVersion') }})
    producer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('producer') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
