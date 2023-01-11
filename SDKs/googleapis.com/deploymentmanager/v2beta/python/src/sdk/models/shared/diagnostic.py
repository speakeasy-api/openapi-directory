import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiagnosticLevelEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INFORMATION = "INFORMATION"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class Diagnostic:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    level: Optional[DiagnosticLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    
