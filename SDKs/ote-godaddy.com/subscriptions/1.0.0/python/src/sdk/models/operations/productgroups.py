import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProductGroupsHeaders:
    x_market_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Market-Id', 'style': 'simple', 'explode': False }})
    x_shopper_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Shopper-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductGroupsRequest:
    headers: ProductGroupsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class ProductGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    product_groups: Optional[list[Any]] = dataclasses.field(default=None)
    
