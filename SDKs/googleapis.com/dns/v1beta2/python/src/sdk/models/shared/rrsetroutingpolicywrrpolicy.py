import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rrsetroutingpolicywrrpolicywrrpolicyitem as shared_rrsetroutingpolicywrrpolicywrrpolicyitem


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicyWrrPolicy:
    r"""RrSetRoutingPolicyWrrPolicy
    Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
    """
    
    items: Optional[list[shared_rrsetroutingpolicywrrpolicywrrpolicyitem.RrSetRoutingPolicyWrrPolicyWrrPolicyItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
