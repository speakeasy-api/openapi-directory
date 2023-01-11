import dataclasses
from typing import Optional


@dataclasses.dataclass
class PagespeedAPIImageV2PageRect:
    r"""PagespeedAPIImageV2PageRect
    The region of the page that is captured by this image, with dimensions measured in CSS pixels.
    """
    
    height: Optional[int] = dataclasses.field(default=None)
    left: Optional[int] = dataclasses.field(default=None)
    top: Optional[int] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIImageV2:
    data: Optional[str] = dataclasses.field(default=None)
    height: Optional[int] = dataclasses.field(default=None)
    key: Optional[str] = dataclasses.field(default=None)
    mime_type: Optional[str] = dataclasses.field(default=None)
    page_rect: Optional[PagespeedAPIImageV2PageRect] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    
