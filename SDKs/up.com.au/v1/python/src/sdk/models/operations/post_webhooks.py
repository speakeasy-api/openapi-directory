import dataclasses
from typing import Optional
from ..shared import createwebhookrequest as shared_createwebhookrequest
from ..shared import createwebhookresponse as shared_createwebhookresponse


@dataclasses.dataclass
class PostWebhooksRequest:
    request: Optional[shared_createwebhookrequest.CreateWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_webhook_response: Optional[shared_createwebhookresponse.CreateWebhookResponse] = dataclasses.field(default=None)
    
