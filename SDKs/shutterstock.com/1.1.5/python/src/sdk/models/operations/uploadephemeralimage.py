import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import imagecreaterequest as shared_imagecreaterequest
from ..shared import imagecreateresponse as shared_imagecreateresponse


@dataclasses.dataclass
class UploadEphemeralImageSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UploadEphemeralImageRequest:
    request: shared_imagecreaterequest.ImageCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UploadEphemeralImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UploadEphemeralImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_create_response: Optional[shared_imagecreateresponse.ImageCreateResponse] = dataclasses.field(default=None)
    
