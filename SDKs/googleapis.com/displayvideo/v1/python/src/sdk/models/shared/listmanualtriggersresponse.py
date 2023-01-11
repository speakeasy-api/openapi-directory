import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import manualtrigger as shared_manualtrigger


@dataclass_json
@dataclasses.dataclass
class ListManualTriggersResponse:
    manual_triggers: Optional[list[shared_manualtrigger.ManualTrigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualTriggers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
