import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetMapVersionNumberStaticimagePathParams:
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class GetMapVersionNumberStaticimageFormatEnum(str, Enum):
    PNG = "png"
    JPG = "jpg"
    JPEG = "jpeg"

class GetMapVersionNumberStaticimageLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberStaticimageStyleEnum(str, Enum):
    MAIN = "main"
    NIGHT = "night"

class GetMapVersionNumberStaticimageViewEnum(str, Enum):
    UNIFIED = "Unified"
    IN = "IN"


@dataclasses.dataclass
class GetMapVersionNumberStaticimageQueryParams:
    bbox: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    center: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'center', 'style': 'form', 'explode': True }})
    format: Optional[GetMapVersionNumberStaticimageFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    layer: Optional[GetMapVersionNumberStaticimageLayerEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'layer', 'style': 'form', 'explode': True }})
    style: Optional[GetMapVersionNumberStaticimageStyleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'style', 'style': 'form', 'explode': True }})
    view: Optional[GetMapVersionNumberStaticimageViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    zoom: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zoom', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberStaticimageRequest:
    path_params: GetMapVersionNumberStaticimagePathParams = dataclasses.field()
    query_params: GetMapVersionNumberStaticimageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberStaticimageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
