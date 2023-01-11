import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DisplayOptionTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    DANGER = "DANGER"
    INFO = "INFO"


@dataclass_json
@dataclasses.dataclass
class DisplayOption:
    r"""DisplayOption
    Option definition for STATUS dataTypes.
    """
    
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: DisplayOptionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
