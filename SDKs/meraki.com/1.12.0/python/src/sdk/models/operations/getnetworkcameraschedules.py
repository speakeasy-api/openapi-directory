import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCameraSchedulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCameraSchedulesRequest:
    path_params: GetNetworkCameraSchedulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCameraSchedulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_camera_schedules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
