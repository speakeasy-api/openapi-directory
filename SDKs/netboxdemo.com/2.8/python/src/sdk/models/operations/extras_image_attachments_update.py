import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import imageattachment as shared_imageattachment
from ..shared import imageattachment as shared_imageattachment


@dataclasses.dataclass
class ExtrasImageAttachmentsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasImageAttachmentsUpdateRequest:
    path_params: ExtrasImageAttachmentsUpdatePathParams = dataclasses.field()
    request: shared_imageattachment.ImageAttachmentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasImageAttachmentsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_attachment: Optional[shared_imageattachment.ImageAttachment] = dataclasses.field(default=None)
    
