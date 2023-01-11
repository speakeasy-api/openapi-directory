import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configvariabletemplate as shared_configvariabletemplate

class AuthConfigTemplateAuthTypeEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER_PASSWORD = "USER_PASSWORD"
    OAUTH2_JWT_BEARER = "OAUTH2_JWT_BEARER"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"
    SSH_PUBLIC_KEY = "SSH_PUBLIC_KEY"
    OAUTH2_AUTH_CODE_FLOW = "OAUTH2_AUTH_CODE_FLOW"


@dataclass_json
@dataclasses.dataclass
class AuthConfigTemplate:
    r"""AuthConfigTemplate
    AuthConfigTemplate defines required field over an authentication type.
    """
    
    auth_type: Optional[AuthConfigTemplateAuthTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    config_variable_templates: Optional[list[shared_configvariabletemplate.ConfigVariableTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configVariableTemplates') }})
    
