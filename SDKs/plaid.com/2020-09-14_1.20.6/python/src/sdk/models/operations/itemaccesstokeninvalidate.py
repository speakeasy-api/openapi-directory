import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import itemaccesstokeninvalidaterequest as shared_itemaccesstokeninvalidaterequest


@dataclasses.dataclass
class ItemAccessTokenInvalidateRequest:
    request: shared_itemaccesstokeninvalidaterequest.ItemAccessTokenInvalidateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemAccessTokenInvalidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_access_token_invalidate_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
