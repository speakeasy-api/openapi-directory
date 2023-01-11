import dataclasses
from typing import Any,Optional
from ..shared import itempublictokenexchangerequest as shared_itempublictokenexchangerequest


@dataclasses.dataclass
class ItemPublicTokenExchangeRequest:
    request: shared_itempublictokenexchangerequest.ItemPublicTokenExchangeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemPublicTokenExchangeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_public_token_exchange_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
