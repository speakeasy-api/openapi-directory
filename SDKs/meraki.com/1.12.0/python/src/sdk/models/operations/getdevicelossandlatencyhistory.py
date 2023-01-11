import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetDeviceLossAndLatencyHistoryPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceLossAndLatencyHistoryUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"
    CELLULAR = "cellular"


@dataclasses.dataclass
class GetDeviceLossAndLatencyHistoryQueryParams:
    ip: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    uplink: Optional[GetDeviceLossAndLatencyHistoryUplinkEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uplink', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceLossAndLatencyHistoryRequest:
    path_params: GetDeviceLossAndLatencyHistoryPathParams = dataclasses.field()
    query_params: GetDeviceLossAndLatencyHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceLossAndLatencyHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_loss_and_latency_history_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
