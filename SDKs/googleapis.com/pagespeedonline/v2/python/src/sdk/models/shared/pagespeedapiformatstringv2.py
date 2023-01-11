import dataclasses
from typing import Optional


@dataclasses.dataclass
class PagespeedAPIFormatStringV2ArgsRects:
    height: Optional[int] = dataclasses.field(default=None)
    left: Optional[int] = dataclasses.field(default=None)
    top: Optional[int] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIFormatStringV2ArgsSecondaryRects:
    height: Optional[int] = dataclasses.field(default=None)
    left: Optional[int] = dataclasses.field(default=None)
    top: Optional[int] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIFormatStringV2Args:
    key: Optional[str] = dataclasses.field(default=None)
    rects: Optional[list[PagespeedAPIFormatStringV2ArgsRects]] = dataclasses.field(default=None)
    secondary_rects: Optional[list[PagespeedAPIFormatStringV2ArgsSecondaryRects]] = dataclasses.field(default=None)
    type: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIFormatStringV2:
    args: Optional[list[PagespeedAPIFormatStringV2Args]] = dataclasses.field(default=None)
    format: Optional[str] = dataclasses.field(default=None)
    
