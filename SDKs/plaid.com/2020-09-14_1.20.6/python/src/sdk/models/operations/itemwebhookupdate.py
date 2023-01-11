import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import itemwebhookupdaterequest as shared_itemwebhookupdaterequest


@dataclasses.dataclass
class ItemWebhookUpdateRequest:
    request: shared_itemwebhookupdaterequest.ItemWebhookUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemWebhookUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_webhook_update_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
