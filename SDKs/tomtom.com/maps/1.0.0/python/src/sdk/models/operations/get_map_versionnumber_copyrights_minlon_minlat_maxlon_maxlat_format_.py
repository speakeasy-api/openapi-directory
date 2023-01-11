import dataclasses
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclasses.dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams:
    format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    max_lat: float = dataclasses.field(metadata={'path_param': { 'field_name': 'maxLat', 'style': 'simple', 'explode': False }})
    max_lon: float = dataclasses.field(metadata={'path_param': { 'field_name': 'maxLon', 'style': 'simple', 'explode': False }})
    min_lat: float = dataclasses.field(metadata={'path_param': { 'field_name': 'minLat', 'style': 'simple', 'explode': False }})
    min_lon: float = dataclasses.field(metadata={'path_param': { 'field_name': 'minLon', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest:
    path_params: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams = dataclasses.field()
    query_params: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
