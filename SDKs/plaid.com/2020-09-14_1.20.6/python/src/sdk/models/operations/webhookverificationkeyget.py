import dataclasses
from typing import Any,Optional
from ..shared import webhookverificationkeygetrequest as shared_webhookverificationkeygetrequest


@dataclasses.dataclass
class WebhookVerificationKeyGetRequest:
    request: shared_webhookverificationkeygetrequest.WebhookVerificationKeyGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebhookVerificationKeyGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_verification_key_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
