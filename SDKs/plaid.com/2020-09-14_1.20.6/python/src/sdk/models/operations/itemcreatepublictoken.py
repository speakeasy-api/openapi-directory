import dataclasses
from typing import Any,Optional
from ..shared import itempublictokencreaterequest as shared_itempublictokencreaterequest


@dataclasses.dataclass
class ItemCreatePublicTokenRequest:
    request: shared_itempublictokencreaterequest.ItemPublicTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemCreatePublicTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_public_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
