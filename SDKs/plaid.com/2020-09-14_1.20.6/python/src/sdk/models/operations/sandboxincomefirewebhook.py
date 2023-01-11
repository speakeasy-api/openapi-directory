import dataclasses
from typing import Any,Optional
from ..shared import sandboxincomefirewebhookrequest as shared_sandboxincomefirewebhookrequest
from ..shared import sandboxincomefirewebhookresponse as shared_sandboxincomefirewebhookresponse


@dataclasses.dataclass
class SandboxIncomeFireWebhookRequest:
    request: shared_sandboxincomefirewebhookrequest.SandboxIncomeFireWebhookRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxIncomeFireWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_income_fire_webhook_response: Optional[shared_sandboxincomefirewebhookresponse.SandboxIncomeFireWebhookResponse] = dataclasses.field(default=None)
    
