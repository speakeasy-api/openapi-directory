import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class QrCodeRequestBody:
    content: str = dataclasses.field(metadata={'form': { 'field_name': 'content' }})
    bg_color: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'bg-color' }})
    fg_color: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'fg-color' }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'height' }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'width' }})
    

@dataclasses.dataclass
class QrCodeRequest:
    request: QrCodeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class QrCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    qr_code_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
