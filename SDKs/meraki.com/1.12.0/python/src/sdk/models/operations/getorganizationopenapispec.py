import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationOpenapiSpecPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationOpenapiSpecRequest:
    path_params: GetOrganizationOpenapiSpecPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationOpenapiSpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_openapi_spec_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
