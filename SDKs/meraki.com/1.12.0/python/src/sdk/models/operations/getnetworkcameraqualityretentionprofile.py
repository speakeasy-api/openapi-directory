import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCameraQualityRetentionProfileRequest:
    path_params: GetNetworkCameraQualityRetentionProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCameraQualityRetentionProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
