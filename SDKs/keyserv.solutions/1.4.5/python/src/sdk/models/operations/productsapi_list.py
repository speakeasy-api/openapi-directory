import dataclasses
from typing import Any,Optional
from ..shared import apikey as shared_apikey
from ..shared import productview as shared_productview


@dataclasses.dataclass
class ProductsAPIListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProductsAPIListRequest:
    query_params: ProductsAPIListQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProductsAPIListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_views: Optional[list[shared_productview.ProductView]] = dataclasses.field(default=None)
    
