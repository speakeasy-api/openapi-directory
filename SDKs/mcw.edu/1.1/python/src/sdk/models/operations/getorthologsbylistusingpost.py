import dataclasses
from typing import Optional
from ..shared import orthologrequest as shared_orthologrequest


@dataclasses.dataclass
class GetOrthologsByListUsingPostRequest:
    request: shared_orthologrequest.OrthologRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrthologsByListUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
