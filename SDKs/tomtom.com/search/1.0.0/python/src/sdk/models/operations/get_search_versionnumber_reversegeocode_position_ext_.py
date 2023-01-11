import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodePositionExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    position: str = dataclasses.field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodePositionExtQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    heading: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    return_road_use: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'returnRoadUse', 'style': 'form', 'explode': True }})
    return_speed_limit: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'returnSpeedLimit', 'style': 'form', 'explode': True }})
    road_use: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roadUse', 'style': 'form', 'explode': True }})
    spatial_keys: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spatialKeys', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodePositionExtRequest:
    path_params: GetSearchVersionNumberReverseGeocodePositionExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberReverseGeocodePositionExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodePositionExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
