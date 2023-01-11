import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationSamlIdpPathParams:
    idp_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationSamlIdpRequestBody:
    slo_logout_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sloLogoutUrl') }})
    x509cert_sha1_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509certSha1Fingerprint') }})
    

@dataclasses.dataclass
class UpdateOrganizationSamlIdpRequest:
    path_params: UpdateOrganizationSamlIdpPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationSamlIdpRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationSamlIdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_saml_idp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
