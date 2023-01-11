import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationAdminsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAdminsRequest:
    path_params: GetOrganizationAdminsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAdminsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_admins_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
