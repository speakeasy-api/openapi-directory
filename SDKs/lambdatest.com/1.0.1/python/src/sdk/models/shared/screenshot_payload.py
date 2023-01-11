import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import browsers as shared_browsers


@dataclass_json
@dataclasses.dataclass
class ScreenshotPayloadConfigs:
    macos_mojave: Optional[shared_browsers.Browsers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macos mojave') }})
    windows_10: Optional[shared_browsers.Browsers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windows 10') }})
    

@dataclass_json
@dataclasses.dataclass
class ScreenshotPayload:
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    configs: Optional[ScreenshotPayloadConfigs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    defer_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defer_time') }})
    email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    mac_res: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_res') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    tunnel: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnel') }})
    tunnel_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnel_identifier') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    win_res: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('win_res') }})
    
