import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSamlIdpsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSamlIdpsRequest:
    path_params: GetOrganizationSamlIdpsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSamlIdpsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_saml_idps_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
