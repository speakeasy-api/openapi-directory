import dataclasses
from typing import Any,Optional
from ..shared import processoridentitygetrequest as shared_processoridentitygetrequest


@dataclasses.dataclass
class ProcessorIdentityGetRequest:
    request: shared_processoridentitygetrequest.ProcessorIdentityGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorIdentityGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    processor_identity_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
