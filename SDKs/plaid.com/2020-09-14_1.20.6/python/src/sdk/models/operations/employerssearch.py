import dataclasses
from typing import Any,Optional
from ..shared import employerssearchrequest as shared_employerssearchrequest


@dataclasses.dataclass
class EmployersSearchRequest:
    request: shared_employerssearchrequest.EmployersSearchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EmployersSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employers_search_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
