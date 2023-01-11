import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementinstallerror as shared_configmanagementinstallerror

class ConfigManagementOperatorStateDeploymentStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class ConfigManagementOperatorState:
    r"""ConfigManagementOperatorState
    State information for an ACM's Operator
    """
    
    deployment_state: Optional[ConfigManagementOperatorStateDeploymentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentState') }})
    errors: Optional[list[shared_configmanagementinstallerror.ConfigManagementInstallError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
