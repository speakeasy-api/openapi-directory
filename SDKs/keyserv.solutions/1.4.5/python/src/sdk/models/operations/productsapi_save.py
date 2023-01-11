import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProductsAPISaveRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProductsAPISaveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    products_api_save_201_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
