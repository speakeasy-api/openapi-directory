import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationtype_enum as shared_authenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class AuthenticationObject:
    r"""AuthenticationObject
    Authentication object.
    
    """
    
    authentication_method_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMethodId') }})
    authentication_type: shared_authenticationtype_enum.AuthenticationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    authentication_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationVersion') }})
    explanation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
