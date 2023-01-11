import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessAirMarshalPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessAirMarshalQueryParams:
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkWirelessAirMarshalRequest:
    path_params: GetNetworkWirelessAirMarshalPathParams = dataclasses.field()
    query_params: GetNetworkWirelessAirMarshalQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessAirMarshalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_air_marshal_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
