import dataclasses
from typing import Any,Optional
from ..shared import itemgetrequest as shared_itemgetrequest


@dataclasses.dataclass
class ItemGetRequest:
    request: shared_itemgetrequest.ItemGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    item_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
