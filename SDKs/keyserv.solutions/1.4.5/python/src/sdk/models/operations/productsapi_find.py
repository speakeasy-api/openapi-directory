import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProductsAPIFindQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProductsAPIFindRequest:
    query_params: ProductsAPIFindQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProductsAPIFindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    products_api_find_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
