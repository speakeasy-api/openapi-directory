import dataclasses
from typing import Optional
from enum import Enum

class GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum(str, Enum):
    JPG = "jpg"
    PNG = "png"

class GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum(str, Enum):
    MAIN = "main"
    NIGHT = "night"


@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams:
    x: int = dataclasses.field(metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    format: GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    layer: GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'layer', 'style': 'simple', 'explode': False }})
    style: GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'style', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = dataclasses.field(metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    
class GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum(str, Enum):
    UNIFIED = "Unified"
    IN = "IN"


@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams:
    tile_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tileSize', 'style': 'form', 'explode': True }})
    view: Optional[GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatRequest:
    path_params: GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams = dataclasses.field()
    query_params: GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
