import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSamlIdpPathParams:
    idp_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSamlIdpRequest:
    path_params: GetOrganizationSamlIdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSamlIdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_saml_idp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
