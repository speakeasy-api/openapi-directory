import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationConfigTemplatesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationConfigTemplatesRequest:
    path_params: GetOrganizationConfigTemplatesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationConfigTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_config_templates_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
