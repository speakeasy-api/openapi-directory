import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSamlRolePathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSamlRoleRequest:
    path_params: GetOrganizationSamlRolePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSamlRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_saml_role_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
