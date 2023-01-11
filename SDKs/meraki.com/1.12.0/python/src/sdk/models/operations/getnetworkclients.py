import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkClientsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkClientsRecentDeviceConnectionsEnum(str, Enum):
    WIRED = "Wired"
    WIRELESS = "Wireless"

class GetNetworkClientsStatusesEnum(str, Enum):
    ONLINE = "Online"
    OFFLINE = "Offline"


@dataclasses.dataclass
class GetNetworkClientsQueryParams:
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    ip6: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ip6', 'style': 'form', 'explode': True }})
    ip6_local: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ip6Local', 'style': 'form', 'explode': True }})
    mac: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac', 'style': 'form', 'explode': True }})
    os: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    recent_device_connections: Optional[list[GetNetworkClientsRecentDeviceConnectionsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recentDeviceConnections', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    statuses: Optional[list[GetNetworkClientsStatusesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'statuses', 'style': 'form', 'explode': False }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkClientsRequest:
    path_params: GetNetworkClientsPathParams = dataclasses.field()
    query_params: GetNetworkClientsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkClientsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_clients_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
