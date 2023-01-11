import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum(str, Enum):
    PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED"
    PHONE_SMS = "PHONE_SMS"

class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    MANDATORY = "MANDATORY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig
    Options related to MultiFactor Authentication for the project.
    """
    
    enabled_providers: Optional[list[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledProviders') }})
    state: Optional[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
