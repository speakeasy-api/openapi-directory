import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationLoginSecurityPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationLoginSecurityRequest:
    path_params: GetOrganizationLoginSecurityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationLoginSecurityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_login_security_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
