import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anthosobservabilitymembershipspec as shared_anthosobservabilitymembershipspec
from ..shared import cloudbuildmembershipspec as shared_cloudbuildmembershipspec
from ..shared import configmanagementmembershipspec as shared_configmanagementmembershipspec
from ..shared import identityservicemembershipspec as shared_identityservicemembershipspec
from ..shared import servicemeshmembershipspec as shared_servicemeshmembershipspec
from ..shared import policycontrollermembershipspec as shared_policycontrollermembershipspec
from ..shared import membershipspec as shared_membershipspec
from ..shared import identityservicemembershipspec as shared_identityservicemembershipspec


@dataclass_json
@dataclasses.dataclass
class MembershipFeatureSpec:
    anthosobservability: Optional[shared_anthosobservabilitymembershipspec.AnthosObservabilityMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosobservability') }})
    cloudbuild: Optional[shared_cloudbuildmembershipspec.CloudBuildMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudbuild') }})
    configmanagement: Optional[shared_configmanagementmembershipspec.ConfigManagementMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleet_inherited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetInherited') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[shared_identityservicemembershipspec.IdentityServiceMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    mesh: Optional[shared_servicemeshmembershipspec.ServiceMeshMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    policycontroller: Optional[shared_policycontrollermembershipspec.PolicyControllerMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policycontroller') }})
    workloadcertificate: Optional[shared_membershipspec.MembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadcertificate') }})
    

@dataclass_json
@dataclasses.dataclass
class MembershipFeatureSpecInput:
    anthosobservability: Optional[shared_anthosobservabilitymembershipspec.AnthosObservabilityMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosobservability') }})
    cloudbuild: Optional[shared_cloudbuildmembershipspec.CloudBuildMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudbuild') }})
    configmanagement: Optional[shared_configmanagementmembershipspec.ConfigManagementMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleet_inherited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetInherited') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[shared_identityservicemembershipspec.IdentityServiceMembershipSpecInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    mesh: Optional[shared_servicemeshmembershipspec.ServiceMeshMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    policycontroller: Optional[shared_policycontrollermembershipspec.PolicyControllerMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policycontroller') }})
    workloadcertificate: Optional[shared_membershipspec.MembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadcertificate') }})
    
