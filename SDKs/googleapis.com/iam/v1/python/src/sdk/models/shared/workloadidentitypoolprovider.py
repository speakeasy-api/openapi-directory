import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aws as shared_aws
from ..shared import oidc as shared_oidc
from ..shared import saml as shared_saml

class WorkloadIdentityPoolProviderStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclasses.dataclass
class WorkloadIdentityPoolProvider:
    r"""WorkloadIdentityPoolProvider
    A configuration for an external identity provider.
    """
    
    attribute_condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeCondition') }})
    attribute_mapping: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMapping') }})
    aws: Optional[shared_aws.Aws] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aws') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oidc: Optional[shared_oidc.Oidc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    saml: Optional[shared_saml.Saml] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml') }})
    state: Optional[WorkloadIdentityPoolProviderStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkloadIdentityPoolProviderInput:
    r"""WorkloadIdentityPoolProviderInput
    A configuration for an external identity provider.
    """
    
    attribute_condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeCondition') }})
    attribute_mapping: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMapping') }})
    aws: Optional[shared_aws.Aws] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aws') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    oidc: Optional[shared_oidc.Oidc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    saml: Optional[shared_saml.Saml] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml') }})
    
