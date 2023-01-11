import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationSamlIdpPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationSamlIdpRequestBody:
    x509cert_sha1_fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509certSha1Fingerprint') }})
    slo_logout_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sloLogoutUrl') }})
    

@dataclasses.dataclass
class CreateOrganizationSamlIdpRequest:
    path_params: CreateOrganizationSamlIdpPathParams = dataclasses.field()
    request: CreateOrganizationSamlIdpRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationSamlIdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_saml_idp_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
