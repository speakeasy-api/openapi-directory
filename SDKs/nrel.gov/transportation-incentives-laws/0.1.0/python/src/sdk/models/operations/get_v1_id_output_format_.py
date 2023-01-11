import dataclasses
from typing import Optional
from enum import Enum

class GetV1IDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetV1IDOutputFormatPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    output_format: GetV1IDOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV1IDOutputFormatQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    expired: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expired', 'style': 'form', 'explode': True }})
    poc: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'poc', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV1IDOutputFormatRequest:
    path_params: GetV1IDOutputFormatPathParams = dataclasses.field()
    query_params: GetV1IDOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV1IDOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
