"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum(str, Enum):
    r"""Status of gatekeeper-audit deployment."""
    DEPLOYMENT_STATE_UNSPECIFIED = 'DEPLOYMENT_STATE_UNSPECIFIED'
    NOT_INSTALLED = 'NOT_INSTALLED'
    INSTALLED = 'INSTALLED'
    ERROR = 'ERROR'

class ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum(str, Enum):
    r"""Status of gatekeeper-controller-manager pod."""
    DEPLOYMENT_STATE_UNSPECIFIED = 'DEPLOYMENT_STATE_UNSPECIFIED'
    NOT_INSTALLED = 'NOT_INSTALLED'
    INSTALLED = 'INSTALLED'
    ERROR = 'ERROR'

class ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum(str, Enum):
    r"""Status of the pod serving the mutation webhook."""
    DEPLOYMENT_STATE_UNSPECIFIED = 'DEPLOYMENT_STATE_UNSPECIFIED'
    NOT_INSTALLED = 'NOT_INSTALLED'
    INSTALLED = 'INSTALLED'
    ERROR = 'ERROR'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConfigManagementGatekeeperDeploymentState:
    r"""State of Policy Controller installation."""
    
    gatekeeper_audit: Optional[ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatekeeperAudit'), 'exclude': lambda f: f is None }})
    r"""Status of gatekeeper-audit deployment."""  
    gatekeeper_controller_manager_state: Optional[ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatekeeperControllerManagerState'), 'exclude': lambda f: f is None }})
    r"""Status of gatekeeper-controller-manager pod."""  
    gatekeeper_mutation: Optional[ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatekeeperMutation'), 'exclude': lambda f: f is None }})
    r"""Status of the pod serving the mutation webhook."""  
    