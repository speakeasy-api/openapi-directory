import dataclasses
from typing import Any


@dataclasses.dataclass
class ProductsAPIPatchProductRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProductsAPIPatchProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
