import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementhierarchycontrollerdeploymentstate as shared_configmanagementhierarchycontrollerdeploymentstate
from ..shared import configmanagementhierarchycontrollerversion as shared_configmanagementhierarchycontrollerversion


@dataclass_json
@dataclasses.dataclass
class ConfigManagementHierarchyControllerState:
    r"""ConfigManagementHierarchyControllerState
    State for Hierarchy Controller
    """
    
    state: Optional[shared_configmanagementhierarchycontrollerdeploymentstate.ConfigManagementHierarchyControllerDeploymentState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    version: Optional[shared_configmanagementhierarchycontrollerversion.ConfigManagementHierarchyControllerVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
