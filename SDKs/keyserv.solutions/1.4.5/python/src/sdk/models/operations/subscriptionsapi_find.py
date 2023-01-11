import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SubscriptionsAPIFindRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscriptionsAPIFindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscriptions_api_find_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
