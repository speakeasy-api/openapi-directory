import dataclasses
from typing import Any,Optional
from ..shared import processorbalancegetrequest as shared_processorbalancegetrequest


@dataclasses.dataclass
class ProcessorBalanceGetRequest:
    request: shared_processorbalancegetrequest.ProcessorBalanceGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorBalanceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    processor_balance_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
