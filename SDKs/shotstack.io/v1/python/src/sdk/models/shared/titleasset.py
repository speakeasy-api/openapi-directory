import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offset as shared_offset

class TitleAssetPositionEnum(str, Enum):
    TOP = "top"
    TOP_RIGHT = "topRight"
    RIGHT = "right"
    BOTTOM_RIGHT = "bottomRight"
    BOTTOM = "bottom"
    BOTTOM_LEFT = "bottomLeft"
    LEFT = "left"
    TOP_LEFT = "topLeft"
    CENTER = "center"

class TitleAssetSizeEnum(str, Enum):
    XX_SMALL = "xx-small"
    X_SMALL = "x-small"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"
    X_LARGE = "x-large"
    XX_LARGE = "xx-large"

class TitleAssetStyleEnum(str, Enum):
    MINIMAL = "minimal"
    BLOCKBUSTER = "blockbuster"
    VOGUE = "vogue"
    SKETCHY = "sketchy"
    SKINNY = "skinny"
    CHUNK = "chunk"
    CHUNK_LIGHT = "chunkLight"
    MARKER = "marker"
    FUTURE = "future"
    SUBTITLE = "subtitle"


@dataclass_json
@dataclasses.dataclass
class TitleAsset:
    r"""TitleAsset
    The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
    """
    
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    background: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    offset: Optional[shared_offset.Offset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    position: Optional[TitleAssetPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    size: Optional[TitleAssetSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    style: Optional[TitleAssetStyleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    
