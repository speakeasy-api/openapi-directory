import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkBluetoothClientsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkBluetoothClientsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    include_connectivity_history: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeConnectivityHistory', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkBluetoothClientsRequest:
    path_params: GetNetworkBluetoothClientsPathParams = dataclasses.field()
    query_params: GetNetworkBluetoothClientsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkBluetoothClientsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_bluetooth_clients_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
