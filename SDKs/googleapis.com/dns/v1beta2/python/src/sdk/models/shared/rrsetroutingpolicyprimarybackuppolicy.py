import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rrsetroutingpolicygeopolicy as shared_rrsetroutingpolicygeopolicy
from ..shared import rrsetroutingpolicyhealthchecktargets as shared_rrsetroutingpolicyhealthchecktargets


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicyPrimaryBackupPolicy:
    r"""RrSetRoutingPolicyPrimaryBackupPolicy
    Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
    """
    
    backup_geo_targets: Optional[shared_rrsetroutingpolicygeopolicy.RrSetRoutingPolicyGeoPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupGeoTargets') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    primary_targets: Optional[shared_rrsetroutingpolicyhealthchecktargets.RrSetRoutingPolicyHealthCheckTargets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryTargets') }})
    trickle_traffic: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trickleTraffic') }})
    
