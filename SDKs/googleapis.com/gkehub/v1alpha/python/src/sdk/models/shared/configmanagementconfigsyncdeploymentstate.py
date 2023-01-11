import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateGitSyncEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateImporterEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateMonitorEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"

class ConfigManagementConfigSyncDeploymentStateSyncerEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class ConfigManagementConfigSyncDeploymentState:
    r"""ConfigManagementConfigSyncDeploymentState
    The state of ConfigSync's deployment on a cluster
    """
    
    admission_webhook: Optional[ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admissionWebhook') }})
    git_sync: Optional[ConfigManagementConfigSyncDeploymentStateGitSyncEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitSync') }})
    importer: Optional[ConfigManagementConfigSyncDeploymentStateImporterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importer') }})
    monitor: Optional[ConfigManagementConfigSyncDeploymentStateMonitorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    reconciler_manager: Optional[ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconcilerManager') }})
    root_reconciler: Optional[ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootReconciler') }})
    syncer: Optional[ConfigManagementConfigSyncDeploymentStateSyncerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncer') }})
    
