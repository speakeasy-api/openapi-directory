import dataclasses
from typing import Any,Optional
from ..shared import institutionsgetrequest as shared_institutionsgetrequest


@dataclasses.dataclass
class InstitutionsGetRequest:
    request: shared_institutionsgetrequest.InstitutionsGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InstitutionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    institutions_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
