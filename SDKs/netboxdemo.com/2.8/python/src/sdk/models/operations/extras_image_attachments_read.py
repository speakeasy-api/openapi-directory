import dataclasses
from typing import Optional
from ..shared import imageattachment as shared_imageattachment


@dataclasses.dataclass
class ExtrasImageAttachmentsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasImageAttachmentsReadRequest:
    path_params: ExtrasImageAttachmentsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasImageAttachmentsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_attachment: Optional[shared_imageattachment.ImageAttachment] = dataclasses.field(default=None)
    
