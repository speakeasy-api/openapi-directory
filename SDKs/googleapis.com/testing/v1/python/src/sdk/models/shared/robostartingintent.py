import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startactivityintent as shared_startactivityintent


@dataclass_json
@dataclasses.dataclass
class RoboStartingIntent:
    r"""RoboStartingIntent
    Message for specifying the start activities to crawl.
    """
    
    launcher_activity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launcherActivity') }})
    start_activity: Optional[shared_startactivityintent.StartActivityIntent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startActivity') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
