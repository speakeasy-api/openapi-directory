import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetPathParams:
    shopper_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shopperId', 'style': 'simple', 'explode': False }})
    
class GetIncludesEnum(str, Enum):
    CUSTOMER_ID = "customerId"


@dataclasses.dataclass
class GetQueryParams:
    includes: Optional[list[GetIncludesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includes', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetRequest:
    path_params: GetPathParams = dataclasses.field()
    query_params: GetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    shopper: Optional[Any] = dataclasses.field(default=None)
    
