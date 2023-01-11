import dataclasses
from typing import Optional
from enum import Enum
from ..shared import classification as shared_classification
from ..shared import externallink as shared_externallink
from ..shared import image as shared_image

class AttractionTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclasses.dataclass
class Attraction:
    r"""Attraction
    Attraction
    """
    
    id: str = dataclasses.field()
    type: AttractionTypeEnum = dataclasses.field()
    additional_info: Optional[str] = dataclasses.field(default=None)
    classifications: Optional[list[shared_classification.Classification]] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    external_links: Optional[dict[str, list[shared_externallink.ExternalLink]]] = dataclasses.field(default=None)
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    locale: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    test: Optional[bool] = dataclasses.field(default=None)
    upcoming_events: Optional[dict[str, int]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
