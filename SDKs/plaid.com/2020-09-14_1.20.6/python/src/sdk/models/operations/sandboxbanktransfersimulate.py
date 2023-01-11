import dataclasses
from typing import Any,Optional
from ..shared import sandboxbanktransfersimulaterequest as shared_sandboxbanktransfersimulaterequest


@dataclasses.dataclass
class SandboxBankTransferSimulateRequest:
    request: shared_sandboxbanktransfersimulaterequest.SandboxBankTransferSimulateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxBankTransferSimulateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_bank_transfer_simulate_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
