import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationcodelink as shared_authorizationcodelink
from ..shared import enumoption as shared_enumoption
from ..shared import rolegrant as shared_rolegrant

class ConfigVariableTemplateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DEPRECATED = "DEPRECATED"

class ConfigVariableTemplateValueTypeEnum(str, Enum):
    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    STRING = "STRING"
    INT = "INT"
    BOOL = "BOOL"
    SECRET = "SECRET"
    ENUM = "ENUM"
    AUTHORIZATION_CODE = "AUTHORIZATION_CODE"


@dataclass_json
@dataclasses.dataclass
class ConfigVariableTemplate:
    r"""ConfigVariableTemplate
    ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
    """
    
    authorization_code_link: Optional[shared_authorizationcodelink.AuthorizationCodeLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationCodeLink') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enum_options: Optional[list[shared_enumoption.EnumOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumOptions') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    role_grant: Optional[shared_rolegrant.RoleGrant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleGrant') }})
    state: Optional[ConfigVariableTemplateStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    validation_regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationRegex') }})
    value_type: Optional[ConfigVariableTemplateValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
