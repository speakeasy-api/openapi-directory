import dataclasses
from typing import Optional
from enum import Enum

class GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum(str, Enum):
    MAIN = "main"


@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams:
    x: int = dataclasses.field(metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'layer', 'style': 'simple', 'explode': False }})
    style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'style', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = dataclasses.field(metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    
class GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum(str, Enum):
    UNIFIED = "Unified"
    IL = "IL"
    IN = "IN"


@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams:
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    view: Optional[GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfRequest:
    path_params: GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams = dataclasses.field()
    query_params: GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
