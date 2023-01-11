import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rrsetroutingpolicyhealthchecktargets as shared_rrsetroutingpolicyhealthchecktargets


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicyWrrPolicyWrrPolicyItem:
    r"""RrSetRoutingPolicyWrrPolicyWrrPolicyItem
    A routing block which contains the routing information for one WRR item.
    """
    
    health_checked_targets: Optional[shared_rrsetroutingpolicyhealthchecktargets.RrSetRoutingPolicyHealthCheckTargets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckedTargets') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rrdatas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrdatas') }})
    signature_rrdatas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureRrdatas') }})
    weight: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
