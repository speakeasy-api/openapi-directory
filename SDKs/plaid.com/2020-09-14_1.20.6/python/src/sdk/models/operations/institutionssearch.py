import dataclasses
from typing import Any,Optional
from ..shared import institutionssearchrequest as shared_institutionssearchrequest


@dataclasses.dataclass
class InstitutionsSearchRequest:
    request: shared_institutionssearchrequest.InstitutionsSearchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InstitutionsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    institutions_search_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
