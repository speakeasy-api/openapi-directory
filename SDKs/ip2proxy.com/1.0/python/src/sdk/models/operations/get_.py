import dataclasses
from typing import Optional
from enum import Enum

class GetFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetQueryParams:
    ip: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    format: Optional[GetFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    package: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRequest:
    query_params: GetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_200_text_html_string: Optional[str] = dataclasses.field(default=None)
    
