import dataclasses
from typing import Any,Optional
from ..shared import applicationgetrequest as shared_applicationgetrequest
from ..shared import applicationgetresponse as shared_applicationgetresponse


@dataclasses.dataclass
class ApplicationGetRequest:
    request: shared_applicationgetrequest.ApplicationGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ApplicationGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_get_response: Optional[shared_applicationgetresponse.ApplicationGetResponse] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
