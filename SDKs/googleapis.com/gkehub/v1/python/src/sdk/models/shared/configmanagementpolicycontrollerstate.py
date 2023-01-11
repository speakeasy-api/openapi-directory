import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementgatekeeperdeploymentstate as shared_configmanagementgatekeeperdeploymentstate
from ..shared import configmanagementpolicycontrollerversion as shared_configmanagementpolicycontrollerversion


@dataclass_json
@dataclasses.dataclass
class ConfigManagementPolicyControllerState:
    r"""ConfigManagementPolicyControllerState
    State for PolicyControllerState.
    """
    
    deployment_state: Optional[shared_configmanagementgatekeeperdeploymentstate.ConfigManagementGatekeeperDeploymentState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    version: Optional[shared_configmanagementpolicycontrollerversion.ConfigManagementPolicyControllerVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
