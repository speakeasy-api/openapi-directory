import dataclasses
from typing import Optional
from ..shared import annotationrequest as shared_annotationrequest


@dataclasses.dataclass
class GetAnnotationsUsingPostRequest:
    request: Optional[shared_annotationrequest.AnnotationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAnnotationsUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
