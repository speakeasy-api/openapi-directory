import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCameraQualityRetentionProfilesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCameraQualityRetentionProfilesRequest:
    path_params: GetNetworkCameraQualityRetentionProfilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCameraQualityRetentionProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_camera_quality_retention_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
