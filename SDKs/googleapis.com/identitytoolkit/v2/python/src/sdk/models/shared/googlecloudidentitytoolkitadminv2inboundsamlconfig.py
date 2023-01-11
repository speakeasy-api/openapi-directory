import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2idpconfig as shared_googlecloudidentitytoolkitadminv2idpconfig
from ..shared import googlecloudidentitytoolkitadminv2spconfig as shared_googlecloudidentitytoolkitadminv2spconfig
from ..shared import googlecloudidentitytoolkitadminv2spconfig as shared_googlecloudidentitytoolkitadminv2spconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
    A pair of SAML RP-IDP configurations when the project acts as the relying party.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    idp_config: Optional[shared_googlecloudidentitytoolkitadminv2idpconfig.GoogleCloudIdentitytoolkitAdminV2IdpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sp_config: Optional[shared_googlecloudidentitytoolkitadminv2spconfig.GoogleCloudIdentitytoolkitAdminV2SpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput:
    r"""GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput
    A pair of SAML RP-IDP configurations when the project acts as the relying party.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    idp_config: Optional[shared_googlecloudidentitytoolkitadminv2idpconfig.GoogleCloudIdentitytoolkitAdminV2IdpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sp_config: Optional[shared_googlecloudidentitytoolkitadminv2spconfig.GoogleCloudIdentitytoolkitAdminV2SpConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spConfig') }})
    
