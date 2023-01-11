import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configvariable as shared_configvariable
from ..shared import oauth2clientcredentials as shared_oauth2clientcredentials
from ..shared import oauth2jwtbearer as shared_oauth2jwtbearer
from ..shared import sshpublickey as shared_sshpublickey
from ..shared import userpassword as shared_userpassword

class AuthConfigAuthTypeEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER_PASSWORD = "USER_PASSWORD"
    OAUTH2_JWT_BEARER = "OAUTH2_JWT_BEARER"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"
    SSH_PUBLIC_KEY = "SSH_PUBLIC_KEY"
    OAUTH2_AUTH_CODE_FLOW = "OAUTH2_AUTH_CODE_FLOW"


@dataclass_json
@dataclasses.dataclass
class AuthConfig:
    r"""AuthConfig
    AuthConfig defines details of a authentication type.
    """
    
    additional_variables: Optional[list[shared_configvariable.ConfigVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalVariables') }})
    auth_type: Optional[AuthConfigAuthTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    oauth2_client_credentials: Optional[shared_oauth2clientcredentials.Oauth2ClientCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientCredentials') }})
    oauth2_jwt_bearer: Optional[shared_oauth2jwtbearer.Oauth2JwtBearer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2JwtBearer') }})
    ssh_public_key: Optional[shared_sshpublickey.SSHPublicKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    user_password: Optional[shared_userpassword.UserPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPassword') }})
    
