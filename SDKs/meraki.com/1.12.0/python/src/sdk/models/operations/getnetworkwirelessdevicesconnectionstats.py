import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkWirelessDevicesConnectionStatsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessDevicesConnectionStatsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclasses.dataclass
class GetNetworkWirelessDevicesConnectionStatsQueryParams:
    ap_tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    band: Optional[GetNetworkWirelessDevicesConnectionStatsBandEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkWirelessDevicesConnectionStatsRequest:
    path_params: GetNetworkWirelessDevicesConnectionStatsPathParams = dataclasses.field()
    query_params: GetNetworkWirelessDevicesConnectionStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessDevicesConnectionStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_devices_connection_stats_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
