import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpasswordvalidationpolicy as shared_userpasswordvalidationpolicy
from ..shared import sqlserveruserdetails as shared_sqlserveruserdetails

class UserDualPasswordTypeEnum(str, Enum):
    DUAL_PASSWORD_TYPE_UNSPECIFIED = "DUAL_PASSWORD_TYPE_UNSPECIFIED"
    NO_MODIFY_DUAL_PASSWORD = "NO_MODIFY_DUAL_PASSWORD"
    NO_DUAL_PASSWORD = "NO_DUAL_PASSWORD"
    DUAL_PASSWORD = "DUAL_PASSWORD"

class UserTypeEnum(str, Enum):
    BUILT_IN = "BUILT_IN"
    CLOUD_IAM_USER = "CLOUD_IAM_USER"
    CLOUD_IAM_SERVICE_ACCOUNT = "CLOUD_IAM_SERVICE_ACCOUNT"


@dataclass_json
@dataclasses.dataclass
class User:
    r"""User
    A Cloud SQL user resource.
    """
    
    dual_password_type: Optional[UserDualPasswordTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dualPasswordType') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_policy: Optional[shared_userpasswordvalidationpolicy.UserPasswordValidationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordPolicy') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    sqlserver_user_details: Optional[shared_sqlserveruserdetails.SQLServerUserDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlserverUserDetails') }})
    type: Optional[UserTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
