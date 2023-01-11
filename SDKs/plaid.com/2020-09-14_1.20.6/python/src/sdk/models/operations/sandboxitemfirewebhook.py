import dataclasses
from typing import Any,Optional
from ..shared import sandboxitemfirewebhookrequest as shared_sandboxitemfirewebhookrequest


@dataclasses.dataclass
class SandboxItemFireWebhookRequest:
    request: shared_sandboxitemfirewebhookrequest.SandboxItemFireWebhookRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxItemFireWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_item_fire_webhook_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
