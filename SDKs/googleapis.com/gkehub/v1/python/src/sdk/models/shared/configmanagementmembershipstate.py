import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementconfigsyncstate as shared_configmanagementconfigsyncstate
from ..shared import configmanagementhierarchycontrollerstate as shared_configmanagementhierarchycontrollerstate
from ..shared import configmanagementmembershipspec as shared_configmanagementmembershipspec
from ..shared import configmanagementoperatorstate as shared_configmanagementoperatorstate
from ..shared import configmanagementpolicycontrollerstate as shared_configmanagementpolicycontrollerstate


@dataclass_json
@dataclasses.dataclass
class ConfigManagementMembershipState:
    r"""ConfigManagementMembershipState
    **Anthos Config Management**: State for a single cluster.
    """
    
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    config_sync_state: Optional[shared_configmanagementconfigsyncstate.ConfigManagementConfigSyncState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSyncState') }})
    hierarchy_controller_state: Optional[shared_configmanagementhierarchycontrollerstate.ConfigManagementHierarchyControllerState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyControllerState') }})
    membership_spec: Optional[shared_configmanagementmembershipspec.ConfigManagementMembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipSpec') }})
    operator_state: Optional[shared_configmanagementoperatorstate.ConfigManagementOperatorState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorState') }})
    policy_controller_state: Optional[shared_configmanagementpolicycontrollerstate.ConfigManagementPolicyControllerState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyControllerState') }})
    
