import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementmembershipspec as shared_configmanagementmembershipspec
from ..shared import identityservicemembershipspec as shared_identityservicemembershipspec
from ..shared import servicemeshmembershipspec as shared_servicemeshmembershipspec
from ..shared import identityservicemembershipspec as shared_identityservicemembershipspec


@dataclass_json
@dataclasses.dataclass
class MembershipFeatureSpec:
    configmanagement: Optional[shared_configmanagementmembershipspec.ConfigManagementMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleet_inherited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetInherited') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[shared_identityservicemembershipspec.IdentityServiceMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    mesh: Optional[shared_servicemeshmembershipspec.ServiceMeshMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    

@dataclass_json
@dataclasses.dataclass
class MembershipFeatureSpecInput:
    configmanagement: Optional[shared_configmanagementmembershipspec.ConfigManagementMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleet_inherited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetInherited') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[shared_identityservicemembershipspec.IdentityServiceMembershipSpecInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    mesh: Optional[shared_servicemeshmembershipspec.ServiceMeshMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    
