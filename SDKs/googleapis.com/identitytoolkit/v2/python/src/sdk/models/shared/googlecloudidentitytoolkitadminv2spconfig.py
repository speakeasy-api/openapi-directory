import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2spcertificate as shared_googlecloudidentitytoolkitadminv2spcertificate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2SpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2SpConfig
    The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
    """
    
    callback_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUri') }})
    sp_certificates: Optional[list[shared_googlecloudidentitytoolkitadminv2spcertificate.GoogleCloudIdentitytoolkitAdminV2SpCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spCertificates') }})
    sp_entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spEntityId') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2SpConfigInput:
    r"""GoogleCloudIdentitytoolkitAdminV2SpConfigInput
    The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
    """
    
    callback_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUri') }})
    sp_entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spEntityId') }})
    
