import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CodeScanningAlertRuleSummarySeverityEnum(str, Enum):
    NONE = "none"
    NOTE = "note"
    WARNING = "warning"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CodeScanningAlertRuleSummary:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    severity: Optional[CodeScanningAlertRuleSummarySeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
