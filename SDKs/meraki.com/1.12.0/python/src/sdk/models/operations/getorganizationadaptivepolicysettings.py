import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationAdaptivePolicySettingsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAdaptivePolicySettingsRequest:
    path_params: GetOrganizationAdaptivePolicySettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAdaptivePolicySettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_adaptive_policy_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
