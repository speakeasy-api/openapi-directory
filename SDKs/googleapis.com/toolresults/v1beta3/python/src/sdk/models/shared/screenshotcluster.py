import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import screen as shared_screen


@dataclass_json
@dataclasses.dataclass
class ScreenshotCluster:
    activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    key_screen: Optional[shared_screen.Screen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyScreen') }})
    screens: Optional[list[shared_screen.Screen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screens') }})
    
