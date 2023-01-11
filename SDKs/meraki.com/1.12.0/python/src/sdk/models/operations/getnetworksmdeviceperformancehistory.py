import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDevicePerformanceHistoryPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDevicePerformanceHistoryQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSmDevicePerformanceHistoryRequest:
    path_params: GetNetworkSmDevicePerformanceHistoryPathParams = dataclasses.field()
    query_params: GetNetworkSmDevicePerformanceHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDevicePerformanceHistoryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_performance_history_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
