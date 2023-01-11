import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionhookactionbody as shared_actionhookactionbody
from ..shared import iframeactionbody as shared_iframeactionbody


@dataclass_json
@dataclasses.dataclass
class TopLevelActions:
    secondary: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    primary: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    settings: Optional[shared_iframeactionbody.IFrameActionBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
