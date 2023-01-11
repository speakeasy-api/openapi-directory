import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDeviceDesktopLogsPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceDesktopLogsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceDesktopLogsRequest:
    path_params: GetNetworkSmDeviceDesktopLogsPathParams = dataclasses.field()
    query_params: GetNetworkSmDeviceDesktopLogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDeviceDesktopLogsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_desktop_logs_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
