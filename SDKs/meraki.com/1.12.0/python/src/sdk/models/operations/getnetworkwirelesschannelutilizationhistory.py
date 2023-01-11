import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkWirelessChannelUtilizationHistoryPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessChannelUtilizationHistoryBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"


@dataclasses.dataclass
class GetNetworkWirelessChannelUtilizationHistoryQueryParams:
    ap_tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apTag', 'style': 'form', 'explode': True }})
    auto_resolution: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoResolution', 'style': 'form', 'explode': True }})
    band: Optional[GetNetworkWirelessChannelUtilizationHistoryBandEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkWirelessChannelUtilizationHistoryRequest:
    path_params: GetNetworkWirelessChannelUtilizationHistoryPathParams = dataclasses.field()
    query_params: GetNetworkWirelessChannelUtilizationHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessChannelUtilizationHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_channel_utilization_history_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
