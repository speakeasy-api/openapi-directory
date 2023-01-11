import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkBluetoothClientPathParams:
    bluetooth_client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bluetoothClientId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkBluetoothClientQueryParams:
    connectivity_history_timespan: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'connectivityHistoryTimespan', 'style': 'form', 'explode': True }})
    include_connectivity_history: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeConnectivityHistory', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkBluetoothClientRequest:
    path_params: GetNetworkBluetoothClientPathParams = dataclasses.field()
    query_params: GetNetworkBluetoothClientQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkBluetoothClientResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_bluetooth_client_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
