import dataclasses
from typing import Any


@dataclasses.dataclass
class SubscriptionsAPIEnableRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscriptionsAPIEnableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
