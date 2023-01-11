import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPRouteFaultInjectionPolicyAbort:
    r"""HTTPRouteFaultInjectionPolicyAbort
    Specification of how client requests are aborted as part of fault injection before being sent to a destination.
    """
    
    http_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    
