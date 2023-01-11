import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alloweddomainssettings as shared_alloweddomainssettings
from ..shared import corssettings as shared_corssettings
from ..shared import gcipsettings as shared_gcipsettings
from ..shared import oauthsettings as shared_oauthsettings
from ..shared import policydelegationsettings as shared_policydelegationsettings
from ..shared import reauthsettings as shared_reauthsettings


@dataclass_json
@dataclasses.dataclass
class AccessSettings:
    r"""AccessSettings
    Access related settings for IAP protected apps.
    """
    
    allowed_domains_settings: Optional[shared_alloweddomainssettings.AllowedDomainsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedDomainsSettings') }})
    cors_settings: Optional[shared_corssettings.CorsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corsSettings') }})
    gcip_settings: Optional[shared_gcipsettings.GcipSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcipSettings') }})
    oauth_settings: Optional[shared_oauthsettings.OAuthSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthSettings') }})
    policy_delegation_settings: Optional[shared_policydelegationsettings.PolicyDelegationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDelegationSettings') }})
    reauth_settings: Optional[shared_reauthsettings.ReauthSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reauthSettings') }})
    
