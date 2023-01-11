import dataclasses
from typing import Any,Optional
from ..shared import processorbanktransfercreaterequest as shared_processorbanktransfercreaterequest


@dataclasses.dataclass
class ProcessorBankTransferCreateRequest:
    request: shared_processorbanktransfercreaterequest.ProcessorBankTransferCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorBankTransferCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    processor_bank_transfer_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
