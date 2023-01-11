import dataclasses
from typing import Any,Optional
from ..shared import liabilitiesgetrequest as shared_liabilitiesgetrequest


@dataclasses.dataclass
class LiabilitiesGetRequest:
    request: shared_liabilitiesgetrequest.LiabilitiesGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LiabilitiesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    liabilities_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
