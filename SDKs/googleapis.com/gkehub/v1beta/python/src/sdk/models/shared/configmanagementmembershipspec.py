import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementbinauthzconfig as shared_configmanagementbinauthzconfig
from ..shared import configmanagementconfigsync as shared_configmanagementconfigsync
from ..shared import configmanagementhierarchycontrollerconfig as shared_configmanagementhierarchycontrollerconfig
from ..shared import configmanagementpolicycontroller as shared_configmanagementpolicycontroller


@dataclass_json
@dataclasses.dataclass
class ConfigManagementMembershipSpec:
    r"""ConfigManagementMembershipSpec
    **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
    """
    
    binauthz: Optional[shared_configmanagementbinauthzconfig.ConfigManagementBinauthzConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binauthz') }})
    config_sync: Optional[shared_configmanagementconfigsync.ConfigManagementConfigSync] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSync') }})
    hierarchy_controller: Optional[shared_configmanagementhierarchycontrollerconfig.ConfigManagementHierarchyControllerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyController') }})
    policy_controller: Optional[shared_configmanagementpolicycontroller.ConfigManagementPolicyController] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyController') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
