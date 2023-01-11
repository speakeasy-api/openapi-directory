import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationCameraOnboardingStatusesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationCameraOnboardingStatusesQueryParams:
    network_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationCameraOnboardingStatusesRequest:
    path_params: GetOrganizationCameraOnboardingStatusesPathParams = dataclasses.field()
    query_params: GetOrganizationCameraOnboardingStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationCameraOnboardingStatusesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_camera_onboarding_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
