import dataclasses
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclasses.dataclass
class GetMapVersionNumberCopyrightsFormatPathParams:
    format: GetMapVersionNumberCopyrightsFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsFormatQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsFormatRequest:
    path_params: GetMapVersionNumberCopyrightsFormatPathParams = dataclasses.field()
    query_params: GetMapVersionNumberCopyrightsFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
