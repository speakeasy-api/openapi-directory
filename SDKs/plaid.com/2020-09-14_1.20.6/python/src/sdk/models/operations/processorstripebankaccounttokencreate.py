import dataclasses
from typing import Any,Optional
from ..shared import processorstripebankaccounttokencreaterequest as shared_processorstripebankaccounttokencreaterequest


@dataclasses.dataclass
class ProcessorStripeBankAccountTokenCreateRequest:
    request: shared_processorstripebankaccounttokencreaterequest.ProcessorStripeBankAccountTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorStripeBankAccountTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    processor_stripe_bank_account_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
