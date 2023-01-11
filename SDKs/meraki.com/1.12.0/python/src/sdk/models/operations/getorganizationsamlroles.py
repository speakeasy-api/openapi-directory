import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSamlRolesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSamlRolesRequest:
    path_params: GetOrganizationSamlRolesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSamlRolesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_saml_roles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
