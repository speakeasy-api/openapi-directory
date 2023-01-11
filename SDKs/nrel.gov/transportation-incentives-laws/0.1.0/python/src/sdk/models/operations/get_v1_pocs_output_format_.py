import dataclasses
from typing import Optional
from enum import Enum

class GetV1PocsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetV1PocsOutputFormatPathParams:
    output_format: GetV1PocsOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV1PocsOutputFormatQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    jurisdiction: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV1PocsOutputFormatRequest:
    path_params: GetV1PocsOutputFormatPathParams = dataclasses.field()
    query_params: GetV1PocsOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV1PocsOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
