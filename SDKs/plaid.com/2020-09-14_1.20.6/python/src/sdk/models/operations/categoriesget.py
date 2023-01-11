import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CategoriesGetRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CategoriesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
