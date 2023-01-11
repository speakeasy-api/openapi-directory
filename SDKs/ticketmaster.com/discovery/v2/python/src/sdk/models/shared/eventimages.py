import dataclasses
from typing import Optional
from enum import Enum
from ..shared import image as shared_image

class EventImagesTypeEnum(str, Enum):
    EVENT = "event"


@dataclasses.dataclass
class EventImages:
    r"""EventImages
    This class defines an Event with only images view on the Discovery API
    """
    
    id: str = dataclasses.field()
    type: EventImagesTypeEnum = dataclasses.field()
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    
