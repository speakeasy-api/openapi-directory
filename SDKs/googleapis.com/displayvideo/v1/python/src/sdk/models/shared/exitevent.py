import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExitEventTypeEnum(str, Enum):
    EXIT_EVENT_TYPE_UNSPECIFIED = "EXIT_EVENT_TYPE_UNSPECIFIED"
    EXIT_EVENT_TYPE_DEFAULT = "EXIT_EVENT_TYPE_DEFAULT"
    EXIT_EVENT_TYPE_BACKUP = "EXIT_EVENT_TYPE_BACKUP"


@dataclass_json
@dataclasses.dataclass
class ExitEvent:
    r"""ExitEvent
    Exit event of the creative.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reporting_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingName') }})
    type: Optional[ExitEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
