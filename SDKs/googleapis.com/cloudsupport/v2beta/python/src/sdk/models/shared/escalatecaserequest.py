import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import escalation as shared_escalation


@dataclass_json
@dataclasses.dataclass
class EscalateCaseRequest:
    r"""EscalateCaseRequest
    The request message for the EscalateCase endpoint.
    """
    
    escalation: Optional[shared_escalation.Escalation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalation') }})
    
