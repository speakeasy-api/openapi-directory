import dataclasses
from typing import Optional
from ..shared import imageattachment as shared_imageattachment
from ..shared import imageattachment as shared_imageattachment


@dataclasses.dataclass
class ExtrasImageAttachmentsCreateRequest:
    request: shared_imageattachment.ImageAttachmentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasImageAttachmentsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_attachment: Optional[shared_imageattachment.ImageAttachment] = dataclasses.field(default=None)
    
