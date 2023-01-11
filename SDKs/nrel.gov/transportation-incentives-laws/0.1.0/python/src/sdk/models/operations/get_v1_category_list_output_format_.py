import dataclasses
from typing import Optional
from enum import Enum

class GetV1CategoryListOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetV1CategoryListOutputFormatPathParams:
    output_format: GetV1CategoryListOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    
class GetV1CategoryListOutputFormatTypeEnum(str, Enum):
    TECH = "tech"
    USER = "user"
    REGULATION = "regulation"
    INCENTIVE = "incentive"


@dataclasses.dataclass
class GetV1CategoryListOutputFormatQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    type: Optional[GetV1CategoryListOutputFormatTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV1CategoryListOutputFormatRequest:
    path_params: GetV1CategoryListOutputFormatPathParams = dataclasses.field()
    query_params: GetV1CategoryListOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV1CategoryListOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
