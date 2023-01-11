import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StartScanPageRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartScanPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response: Optional[Any] = dataclasses.field(default=None)
    
