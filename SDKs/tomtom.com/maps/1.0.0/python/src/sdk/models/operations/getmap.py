import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetMapPathParams:
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class GetMapFormatEnum(str, Enum):
    IMAGE_JPEG = "image/jpeg"
    IMAGE_PNG = "image/png"

class GetMapLayersEnum(str, Enum):
    BASIC = "basic"

class GetMapRequestEnum(str, Enum):
    GET_MAP = "GetMap"

class GetMapServiceEnum(str, Enum):
    WMS = "WMS"

class GetMapSrsEnum(str, Enum):
    EPSG_3857 = "EPSG:3857"
    EPSG_4326 = "EPSG:4326"

class GetMapStylesEnum(str, Enum):
    UNKNOWN = ""

class GetMapVersionEnum(str, Enum):
    ONE_1_1 = "1.1.1"


@dataclasses.dataclass
class GetMapQueryParams:
    bbox: str = dataclasses.field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    format: GetMapFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    height: int = dataclasses.field(metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    layers: GetMapLayersEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'layers', 'style': 'form', 'explode': True }})
    request: GetMapRequestEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'request', 'style': 'form', 'explode': True }})
    srs: GetMapSrsEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'srs', 'style': 'form', 'explode': True }})
    version: GetMapVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    width: int = dataclasses.field(metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    service: Optional[GetMapServiceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    styles: Optional[GetMapStylesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'styles', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapRequest:
    path_params: GetMapPathParams = dataclasses.field()
    query_params: GetMapQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
