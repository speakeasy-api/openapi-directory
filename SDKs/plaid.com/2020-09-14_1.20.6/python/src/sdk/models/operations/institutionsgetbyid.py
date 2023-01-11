import dataclasses
from typing import Any,Optional
from ..shared import institutionsgetbyidrequest as shared_institutionsgetbyidrequest


@dataclasses.dataclass
class InstitutionsGetByIDRequest:
    request: shared_institutionsgetbyidrequest.InstitutionsGetByIDRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InstitutionsGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    institutions_get_by_id_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
