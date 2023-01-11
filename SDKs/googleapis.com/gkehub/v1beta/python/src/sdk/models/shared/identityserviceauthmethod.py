import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityserviceazureadconfig as shared_identityserviceazureadconfig
from ..shared import identityservicegoogleconfig as shared_identityservicegoogleconfig
from ..shared import identityserviceoidcconfig as shared_identityserviceoidcconfig
from ..shared import identityserviceazureadconfig as shared_identityserviceazureadconfig
from ..shared import identityserviceoidcconfig as shared_identityserviceoidcconfig


@dataclass_json
@dataclasses.dataclass
class IdentityServiceAuthMethodInput:
    r"""IdentityServiceAuthMethodInput
    Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
    """
    
    azuread_config: Optional[shared_identityserviceazureadconfig.IdentityServiceAzureAdConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureadConfig') }})
    google_config: Optional[shared_identityservicegoogleconfig.IdentityServiceGoogleConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oidc_config: Optional[shared_identityserviceoidcconfig.IdentityServiceOidcConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcConfig') }})
    proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy') }})
    

@dataclass_json
@dataclasses.dataclass
class IdentityServiceAuthMethod:
    r"""IdentityServiceAuthMethod
    Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
    """
    
    azuread_config: Optional[shared_identityserviceazureadconfig.IdentityServiceAzureAdConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureadConfig') }})
    google_config: Optional[shared_identityservicegoogleconfig.IdentityServiceGoogleConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oidc_config: Optional[shared_identityserviceoidcconfig.IdentityServiceOidcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcConfig') }})
    proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy') }})
    
