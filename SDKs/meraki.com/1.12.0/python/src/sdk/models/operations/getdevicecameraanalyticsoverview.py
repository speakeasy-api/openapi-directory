import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetDeviceCameraAnalyticsOverviewPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceCameraAnalyticsOverviewObjectTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"


@dataclasses.dataclass
class GetDeviceCameraAnalyticsOverviewQueryParams:
    object_type: Optional[GetDeviceCameraAnalyticsOverviewObjectTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsOverviewRequest:
    path_params: GetDeviceCameraAnalyticsOverviewPathParams = dataclasses.field()
    query_params: GetDeviceCameraAnalyticsOverviewQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsOverviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_analytics_overview_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
