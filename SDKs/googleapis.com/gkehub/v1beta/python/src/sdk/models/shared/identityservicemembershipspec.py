import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityserviceauthmethod as shared_identityserviceauthmethod
from ..shared import identityserviceauthmethod as shared_identityserviceauthmethod


@dataclass_json
@dataclasses.dataclass
class IdentityServiceMembershipSpecInput:
    r"""IdentityServiceMembershipSpecInput
    **Anthos Identity Service**: Configuration for a single Membership.
    """
    
    auth_methods: Optional[list[shared_identityserviceauthmethod.IdentityServiceAuthMethodInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    

@dataclass_json
@dataclasses.dataclass
class IdentityServiceMembershipSpec:
    r"""IdentityServiceMembershipSpec
    **Anthos Identity Service**: Configuration for a single Membership.
    """
    
    auth_methods: Optional[list[shared_identityserviceauthmethod.IdentityServiceAuthMethod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    
