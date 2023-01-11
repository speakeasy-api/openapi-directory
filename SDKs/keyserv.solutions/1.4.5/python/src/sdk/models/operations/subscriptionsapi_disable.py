import dataclasses
from typing import Any


@dataclasses.dataclass
class SubscriptionsAPIDisableRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscriptionsAPIDisableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
