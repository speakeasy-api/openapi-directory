import dataclasses
from typing import Any,Optional
from ..shared import processorapexprocessortokencreaterequest as shared_processorapexprocessortokencreaterequest


@dataclasses.dataclass
class ProcessorApexProcessorTokenCreateRequest:
    request: shared_processorapexprocessortokencreaterequest.ProcessorApexProcessorTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorApexProcessorTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    processor_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
