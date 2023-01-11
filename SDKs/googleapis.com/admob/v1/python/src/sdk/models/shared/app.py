import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applinkedappinfo as shared_applinkedappinfo
from ..shared import appmanualappinfo as shared_appmanualappinfo


@dataclass_json
@dataclasses.dataclass
class App:
    r"""App
    Describes an AdMob app for a specific platform (For example: Android or iOS).
    """
    
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    linked_app_info: Optional[shared_applinkedappinfo.AppLinkedAppInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAppInfo') }})
    manual_app_info: Optional[shared_appmanualappinfo.AppManualAppInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualAppInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
