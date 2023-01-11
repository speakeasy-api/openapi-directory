import dataclasses
from typing import Optional
from ..shared import media as shared_media


@dataclasses.dataclass
class RetrieveAMediaItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media: Optional[shared_media.Media] = dataclasses.field(default=None)
    
