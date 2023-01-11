import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class ImageResizeRequestBody:
    height: int = dataclasses.field(metadata={'form': { 'field_name': 'height' }})
    image_url: str = dataclasses.field(metadata={'form': { 'field_name': 'image-url' }})
    width: int = dataclasses.field(metadata={'form': { 'field_name': 'width' }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'format' }})
    

@dataclasses.dataclass
class ImageResizeRequest:
    request: ImageResizeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ImageResizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    image_resize_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
