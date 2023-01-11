import dataclasses
from typing import Optional


@dataclasses.dataclass
class PagespeedAPIFormatStringV4ArgsRects:
    height: Optional[int] = dataclasses.field(default=None)
    left: Optional[int] = dataclasses.field(default=None)
    top: Optional[int] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIFormatStringV4ArgsSecondaryRects:
    height: Optional[int] = dataclasses.field(default=None)
    left: Optional[int] = dataclasses.field(default=None)
    top: Optional[int] = dataclasses.field(default=None)
    width: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIFormatStringV4Args:
    key: Optional[str] = dataclasses.field(default=None)
    rects: Optional[list[PagespeedAPIFormatStringV4ArgsRects]] = dataclasses.field(default=None)
    secondary_rects: Optional[list[PagespeedAPIFormatStringV4ArgsSecondaryRects]] = dataclasses.field(default=None)
    type: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PagespeedAPIFormatStringV4:
    args: Optional[list[PagespeedAPIFormatStringV4Args]] = dataclasses.field(default=None)
    format: Optional[str] = dataclasses.field(default=None)
    
