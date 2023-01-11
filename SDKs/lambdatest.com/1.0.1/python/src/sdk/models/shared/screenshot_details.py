import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import screenshot_type as shared_screenshot_type


@dataclass_json
@dataclasses.dataclass
class ScreenshotDetails:
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    defer_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defer_time') }})
    screenshots: Optional[list[shared_screenshot_type.ScreenshotType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshots') }})
    test_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test_id') }})
    test_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test_status') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
