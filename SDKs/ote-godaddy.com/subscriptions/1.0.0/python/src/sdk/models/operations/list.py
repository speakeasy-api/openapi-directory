import dataclasses
from typing import Any,Optional
from enum import Enum

class ListSortEnum(str, Enum):
    EXPIRES_AT = "expiresAt"
    MINUS_EXPIRES_AT = "-expiresAt"


@dataclasses.dataclass
class ListQueryParams:
    includes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includes', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    product_group_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'productGroupKeys', 'style': 'form', 'explode': False }})
    sort: Optional[ListSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHeaders:
    x_market_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Market-Id', 'style': 'simple', 'explode': False }})
    x_shopper_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Shopper-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRequest:
    headers: ListHeaders = dataclasses.field()
    query_params: ListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    subscription_list: Optional[Any] = dataclasses.field(default=None)
    
