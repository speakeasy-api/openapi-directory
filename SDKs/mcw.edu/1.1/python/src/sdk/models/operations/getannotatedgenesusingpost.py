import dataclasses
from typing import Optional
from ..shared import annotatedgenerequest as shared_annotatedgenerequest


@dataclasses.dataclass
class GetAnnotatedGenesUsingPostRequest:
    request: Optional[shared_annotatedgenerequest.AnnotatedGeneRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAnnotatedGenesUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
