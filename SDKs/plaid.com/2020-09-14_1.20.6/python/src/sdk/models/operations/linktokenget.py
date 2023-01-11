import dataclasses
from typing import Any,Optional
from ..shared import linktokengetrequest as shared_linktokengetrequest


@dataclasses.dataclass
class LinkTokenGetRequest:
    request: shared_linktokengetrequest.LinkTokenGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LinkTokenGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    link_token_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
