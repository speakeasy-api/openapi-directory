import dataclasses
from typing import Optional
from enum import Enum

class PriceRangeTypeEnum(str, Enum):
    STANDARD = "standard"


@dataclasses.dataclass
class PriceRange:
    r"""PriceRange
    PriceRange
    """
    
    currency: Optional[str] = dataclasses.field(default=None)
    max: Optional[float] = dataclasses.field(default=None)
    min: Optional[float] = dataclasses.field(default=None)
    type: Optional[PriceRangeTypeEnum] = dataclasses.field(default=None)
    
