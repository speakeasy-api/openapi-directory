import dataclasses
from typing import Any,Optional
from ..shared import processortokencreaterequest as shared_processortokencreaterequest


@dataclasses.dataclass
class ProcessorTokenCreateRequest:
    request: shared_processortokencreaterequest.ProcessorTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    processor_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
