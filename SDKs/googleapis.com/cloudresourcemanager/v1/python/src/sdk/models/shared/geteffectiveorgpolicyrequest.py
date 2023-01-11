import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetEffectiveOrgPolicyRequest:
    r"""GetEffectiveOrgPolicyRequest
    The request sent to the GetEffectiveOrgPolicy method.
    """
    
    constraint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    
