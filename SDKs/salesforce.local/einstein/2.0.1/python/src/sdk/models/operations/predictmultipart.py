import dataclasses
from typing import Optional
from ..shared import imageclassificationrequest as shared_imageclassificationrequest
from ..shared import security as shared_security
from ..shared import imageclassificationresponse as shared_imageclassificationresponse


@dataclasses.dataclass
class PredictMultipartRequests:
    image_classification_request: Optional[shared_imageclassificationrequest.ImageClassificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_classification_request1: Optional[shared_imageclassificationrequest.ImageClassificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PredictMultipartSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PredictMultipartRequest:
    security: PredictMultipartSecurity = dataclasses.field()
    request: Optional[PredictMultipartRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PredictMultipartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_classification_response: Optional[shared_imageclassificationresponse.ImageClassificationResponse] = dataclasses.field(default=None)
    
