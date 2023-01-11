import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import imagecreaterequest as shared_imagecreaterequest
from ..shared import computervisionimagecreateresponse as shared_computervisionimagecreateresponse


@dataclasses.dataclass
class UploadImageSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UploadImageRequest:
    request: shared_imagecreaterequest.ImageCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UploadImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UploadImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    computer_vision_image_create_response: Optional[shared_computervisionimagecreateresponse.ComputerVisionImageCreateResponse] = dataclasses.field(default=None)
    
