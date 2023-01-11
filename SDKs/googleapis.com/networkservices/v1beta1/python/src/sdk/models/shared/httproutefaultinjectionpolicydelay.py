import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPRouteFaultInjectionPolicyDelay:
    r"""HTTPRouteFaultInjectionPolicyDelay
    Specification of how client requests are delayed as part of fault injection before being sent to a destination.
    """
    
    fixed_delay: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedDelay') }})
    percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    
