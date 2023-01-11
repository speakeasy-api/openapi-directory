import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationConfigTemplateSwitchProfilesPathParams:
    config_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationConfigTemplateSwitchProfilesRequest:
    path_params: GetOrganizationConfigTemplateSwitchProfilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationConfigTemplateSwitchProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_config_template_switch_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
