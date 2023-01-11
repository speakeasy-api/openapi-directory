import dataclasses
from typing import Any


@dataclasses.dataclass
class SubscriptionsAPIEnable2Request:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscriptionsAPIEnable2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
