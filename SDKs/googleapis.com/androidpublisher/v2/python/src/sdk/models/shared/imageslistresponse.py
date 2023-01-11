import dataclasses
from typing import Optional
from ..shared import image as shared_image


@dataclasses.dataclass
class ImagesListResponse:
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    
