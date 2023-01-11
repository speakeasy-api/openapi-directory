import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetDeviceCameraAnalyticsZoneHistoryPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    zone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'zoneId', 'style': 'simple', 'explode': False }})
    
class GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"


@dataclasses.dataclass
class GetDeviceCameraAnalyticsZoneHistoryQueryParams:
    object_type: Optional[GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsZoneHistoryRequest:
    path_params: GetDeviceCameraAnalyticsZoneHistoryPathParams = dataclasses.field()
    query_params: GetDeviceCameraAnalyticsZoneHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsZoneHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_analytics_zone_history_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
