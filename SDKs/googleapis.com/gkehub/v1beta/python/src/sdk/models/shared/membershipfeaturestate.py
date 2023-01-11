import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appdevexperiencefeaturestate as shared_appdevexperiencefeaturestate
from ..shared import configmanagementmembershipstate as shared_configmanagementmembershipstate
from ..shared import identityservicemembershipstate as shared_identityservicemembershipstate
from ..shared import meteringmembershipstate as shared_meteringmembershipstate
from ..shared import policycontrollermembershipstate as shared_policycontrollermembershipstate
from ..shared import servicemeshmembershipstate as shared_servicemeshmembershipstate
from ..shared import featurestate as shared_featurestate


@dataclass_json
@dataclasses.dataclass
class MembershipFeatureState:
    appdevexperience: Optional[shared_appdevexperiencefeaturestate.AppDevExperienceFeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    configmanagement: Optional[shared_configmanagementmembershipstate.ConfigManagementMembershipState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[shared_identityservicemembershipstate.IdentityServiceMembershipState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    metering: Optional[shared_meteringmembershipstate.MeteringMembershipState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metering') }})
    policycontroller: Optional[shared_policycontrollermembershipstate.PolicyControllerMembershipState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policycontroller') }})
    servicemesh: Optional[shared_servicemeshmembershipstate.ServiceMeshMembershipState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicemesh') }})
    state: Optional[shared_featurestate.FeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
