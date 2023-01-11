import dataclasses
from typing import Any


@dataclasses.dataclass
class CollectionsCreateRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
