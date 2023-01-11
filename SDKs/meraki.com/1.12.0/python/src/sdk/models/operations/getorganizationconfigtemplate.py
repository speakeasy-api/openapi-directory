import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationConfigTemplatePathParams:
    config_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationConfigTemplateRequest:
    path_params: GetOrganizationConfigTemplatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationConfigTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_config_template_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
