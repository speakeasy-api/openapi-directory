import dataclasses
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclasses.dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatPathParams:
    x: int = dataclasses.field(metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    format: GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = dataclasses.field(metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatRequest:
    path_params: GetMapVersionNumberCopyrightsZoomXYFormatPathParams = dataclasses.field()
    query_params: GetMapVersionNumberCopyrightsZoomXYFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
