import dataclasses
from typing import Any,Optional
from ..shared import linktokencreaterequest as shared_linktokencreaterequest


@dataclasses.dataclass
class LinkTokenCreateRequest:
    request: shared_linktokencreaterequest.LinkTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LinkTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    link_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
