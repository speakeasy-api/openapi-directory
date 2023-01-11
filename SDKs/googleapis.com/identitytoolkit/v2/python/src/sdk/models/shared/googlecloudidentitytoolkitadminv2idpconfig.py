import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2idpcertificate as shared_googlecloudidentitytoolkitadminv2idpcertificate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2IdpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2IdpConfig
    The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
    """
    
    idp_certificates: Optional[list[shared_googlecloudidentitytoolkitadminv2idpcertificate.GoogleCloudIdentitytoolkitAdminV2IdpCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpCertificates') }})
    idp_entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpEntityId') }})
    sign_request: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signRequest') }})
    sso_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoUrl') }})
    
