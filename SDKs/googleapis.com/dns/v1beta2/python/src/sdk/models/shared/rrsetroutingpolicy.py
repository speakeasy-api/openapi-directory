import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rrsetroutingpolicygeopolicy as shared_rrsetroutingpolicygeopolicy
from ..shared import rrsetroutingpolicyprimarybackuppolicy as shared_rrsetroutingpolicyprimarybackuppolicy
from ..shared import rrsetroutingpolicywrrpolicy as shared_rrsetroutingpolicywrrpolicy


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicy:
    r"""RrSetRoutingPolicy
    A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
    """
    
    geo: Optional[shared_rrsetroutingpolicygeopolicy.RrSetRoutingPolicyGeoPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo') }})
    geo_policy: Optional[shared_rrsetroutingpolicygeopolicy.RrSetRoutingPolicyGeoPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoPolicy') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    primary_backup: Optional[shared_rrsetroutingpolicyprimarybackuppolicy.RrSetRoutingPolicyPrimaryBackupPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryBackup') }})
    wrr: Optional[shared_rrsetroutingpolicywrrpolicy.RrSetRoutingPolicyWrrPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrr') }})
    wrr_policy: Optional[shared_rrsetroutingpolicywrrpolicy.RrSetRoutingPolicyWrrPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrrPolicy') }})
    
