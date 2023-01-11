import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationConfigTemplateSwitchProfilePortsPathParams:
    config_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationConfigTemplateSwitchProfilePortsRequest:
    path_params: GetOrganizationConfigTemplateSwitchProfilePortsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationConfigTemplateSwitchProfilePortsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_config_template_switch_profile_ports_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
