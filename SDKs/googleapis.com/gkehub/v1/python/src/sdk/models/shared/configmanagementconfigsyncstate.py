import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementconfigsyncdeploymentstate as shared_configmanagementconfigsyncdeploymentstate
from ..shared import configmanagementsyncstate as shared_configmanagementsyncstate
from ..shared import configmanagementconfigsyncversion as shared_configmanagementconfigsyncversion


@dataclass_json
@dataclasses.dataclass
class ConfigManagementConfigSyncState:
    r"""ConfigManagementConfigSyncState
    State information for ConfigSync
    """
    
    deployment_state: Optional[shared_configmanagementconfigsyncdeploymentstate.ConfigManagementConfigSyncDeploymentState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    sync_state: Optional[shared_configmanagementsyncstate.ConfigManagementSyncState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncState') }})
    version: Optional[shared_configmanagementconfigsyncversion.ConfigManagementConfigSyncVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
