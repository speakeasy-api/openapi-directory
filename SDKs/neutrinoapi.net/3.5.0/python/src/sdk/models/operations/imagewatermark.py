import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class ImageWatermarkRequestBody:
    image_url: str = dataclasses.field(metadata={'form': { 'field_name': 'image-url' }})
    watermark_url: str = dataclasses.field(metadata={'form': { 'field_name': 'watermark-url' }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'format' }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'height' }})
    opacity: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'opacity' }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'position' }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'width' }})
    

@dataclasses.dataclass
class ImageWatermarkRequest:
    request: ImageWatermarkRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ImageWatermarkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    image_watermark_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
