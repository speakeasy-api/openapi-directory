import dataclasses
from typing import Optional
from enum import Enum

class ImageRatioEnum(str, Enum):
    SIXTEEN_9 = "16_9"
    THREE_2 = "3_2"
    FOUR_3 = "4_3"


@dataclasses.dataclass
class Image:
    r"""Image
    Image
    """
    
    attribution: Optional[str] = dataclasses.field(default=None)
    fallback: Optional[bool] = dataclasses.field(default=None)
    height: Optional[int] = dataclasses.field(default=None)
    ratio: Optional[ImageRatioEnum] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    
