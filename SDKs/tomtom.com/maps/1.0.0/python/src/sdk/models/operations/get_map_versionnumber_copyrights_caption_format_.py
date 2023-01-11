import dataclasses
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsCaptionFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclasses.dataclass
class GetMapVersionNumberCopyrightsCaptionFormatPathParams:
    format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsCaptionFormatQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsCaptionFormatRequest:
    path_params: GetMapVersionNumberCopyrightsCaptionFormatPathParams = dataclasses.field()
    query_params: GetMapVersionNumberCopyrightsCaptionFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberCopyrightsCaptionFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
