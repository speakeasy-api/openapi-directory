import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementbinauthzversion as shared_configmanagementbinauthzversion

class ConfigManagementBinauthzStateWebhookEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLED = "INSTALLED"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class ConfigManagementBinauthzState:
    r"""ConfigManagementBinauthzState
    State for Binauthz
    """
    
    version: Optional[shared_configmanagementbinauthzversion.ConfigManagementBinauthzVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    webhook: Optional[ConfigManagementBinauthzStateWebhookEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
