import dataclasses
from typing import Any,Optional
from ..shared import processorauthgetrequest as shared_processorauthgetrequest


@dataclasses.dataclass
class ProcessorAuthGetRequest:
    request: shared_processorauthgetrequest.ProcessorAuthGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProcessorAuthGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    processor_auth_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
