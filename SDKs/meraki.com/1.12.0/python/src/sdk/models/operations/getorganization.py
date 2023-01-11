import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationRequest:
    path_params: GetOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
