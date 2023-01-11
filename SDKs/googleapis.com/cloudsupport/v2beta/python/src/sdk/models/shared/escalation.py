import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EscalationReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    RESOLUTION_TIME = "RESOLUTION_TIME"
    TECHNICAL_EXPERTISE = "TECHNICAL_EXPERTISE"
    BUSINESS_IMPACT = "BUSINESS_IMPACT"


@dataclass_json
@dataclasses.dataclass
class Escalation:
    r"""Escalation
    An escalation of a support case.
    """
    
    justification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('justification') }})
    reason: Optional[EscalationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
