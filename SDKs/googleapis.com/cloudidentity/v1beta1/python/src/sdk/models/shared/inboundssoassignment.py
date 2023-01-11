import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samlssoinfo as shared_samlssoinfo
from ..shared import signinbehavior as shared_signinbehavior

class InboundSsoAssignmentSsoModeEnum(str, Enum):
    SSO_MODE_UNSPECIFIED = "SSO_MODE_UNSPECIFIED"
    SSO_OFF = "SSO_OFF"
    SAML_SSO = "SAML_SSO"
    DOMAIN_WIDE_SAML_IF_ENABLED = "DOMAIN_WIDE_SAML_IF_ENABLED"


@dataclass_json
@dataclasses.dataclass
class InboundSsoAssignment:
    r"""InboundSsoAssignment
    Targets with \"set\" SSO assignments and their respective assignments.
    """
    
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    saml_sso_info: Optional[shared_samlssoinfo.SamlSsoInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlSsoInfo') }})
    sign_in_behavior: Optional[shared_signinbehavior.SignInBehavior] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signInBehavior') }})
    sso_mode: Optional[InboundSsoAssignmentSsoModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoMode') }})
    target_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroup') }})
    target_org_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetOrgUnit') }})
    

@dataclass_json
@dataclasses.dataclass
class InboundSsoAssignmentInput:
    r"""InboundSsoAssignmentInput
    Targets with \"set\" SSO assignments and their respective assignments.
    """
    
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    saml_sso_info: Optional[shared_samlssoinfo.SamlSsoInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlSsoInfo') }})
    sign_in_behavior: Optional[shared_signinbehavior.SignInBehavior] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signInBehavior') }})
    sso_mode: Optional[InboundSsoAssignmentSsoModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoMode') }})
    target_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroup') }})
    target_org_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetOrgUnit') }})
    
