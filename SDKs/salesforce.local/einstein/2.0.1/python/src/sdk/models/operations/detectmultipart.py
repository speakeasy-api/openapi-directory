import dataclasses
from typing import Optional
from ..shared import objectdetectionrequest as shared_objectdetectionrequest
from ..shared import security as shared_security
from ..shared import objectdetectionresponse as shared_objectdetectionresponse


@dataclasses.dataclass
class DetectMultipartRequests:
    object_detection_request: Optional[shared_objectdetectionrequest.ObjectDetectionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object_detection_request1: Optional[shared_objectdetectionrequest.ObjectDetectionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class DetectMultipartSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DetectMultipartRequest:
    security: DetectMultipartSecurity = dataclasses.field()
    request: Optional[DetectMultipartRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DetectMultipartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    object_detection_response: Optional[shared_objectdetectionresponse.ObjectDetectionResponse] = dataclasses.field(default=None)
    
