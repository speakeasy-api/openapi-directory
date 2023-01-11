import dataclasses
from typing import Any,Optional
from ..shared import sandboxbanktransferfirewebhookrequest as shared_sandboxbanktransferfirewebhookrequest
from ..shared import sandboxbanktransferfirewebhookresponse as shared_sandboxbanktransferfirewebhookresponse


@dataclasses.dataclass
class SandboxBankTransferFireWebhookRequest:
    request: shared_sandboxbanktransferfirewebhookrequest.SandboxBankTransferFireWebhookRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxBankTransferFireWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_bank_transfer_fire_webhook_response: Optional[shared_sandboxbanktransferfirewebhookresponse.SandboxBankTransferFireWebhookResponse] = dataclasses.field(default=None)
    
