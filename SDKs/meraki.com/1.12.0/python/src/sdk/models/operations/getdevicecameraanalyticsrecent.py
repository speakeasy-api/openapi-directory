import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetDeviceCameraAnalyticsRecentPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceCameraAnalyticsRecentObjectTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"


@dataclasses.dataclass
class GetDeviceCameraAnalyticsRecentQueryParams:
    object_type: Optional[GetDeviceCameraAnalyticsRecentObjectTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsRecentRequest:
    path_params: GetDeviceCameraAnalyticsRecentPathParams = dataclasses.field()
    query_params: GetDeviceCameraAnalyticsRecentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsRecentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_analytics_recent_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
