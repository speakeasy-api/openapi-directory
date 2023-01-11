import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkWirelessDevicesLatencyStatsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessDevicesLatencyStatsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclasses.dataclass
class GetNetworkWirelessDevicesLatencyStatsQueryParams:
    ap_tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    band: Optional[GetNetworkWirelessDevicesLatencyStatsBandEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ssid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ssid', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkWirelessDevicesLatencyStatsRequest:
    path_params: GetNetworkWirelessDevicesLatencyStatsPathParams = dataclasses.field()
    query_params: GetNetworkWirelessDevicesLatencyStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessDevicesLatencyStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_devices_latency_stats_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
