import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import safehtmlproto as shared_safehtmlproto
from ..shared import regionproto as shared_regionproto

class SuggestionProtoPriorityEnum(str, Enum):
    UNKNOWN_PRIORITY = "unknownPriority"
    ERROR = "error"
    WARNING = "warning"
    INFO = "info"


@dataclass_json
@dataclasses.dataclass
class SuggestionProto:
    help_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpUrl') }})
    long_message: Optional[shared_safehtmlproto.SafeHTMLProto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longMessage') }})
    priority: Optional[SuggestionProtoPriorityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    pseudo_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pseudoResourceId') }})
    region: Optional[shared_regionproto.RegionProto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    screen_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenId') }})
    secondary_priority: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryPriority') }})
    short_message: Optional[shared_safehtmlproto.SafeHTMLProto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortMessage') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
