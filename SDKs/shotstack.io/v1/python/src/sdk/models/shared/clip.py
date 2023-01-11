import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videoasset as shared_videoasset
from ..shared import imageasset as shared_imageasset
from ..shared import titleasset as shared_titleasset
from ..shared import htmlasset as shared_htmlasset
from ..shared import audioasset as shared_audioasset
from ..shared import lumaasset as shared_lumaasset
from ..shared import offset as shared_offset
from ..shared import transition as shared_transition

class ClipEffectEnum(str, Enum):
    ZOOM_IN = "zoomIn"
    ZOOM_OUT = "zoomOut"
    SLIDE_LEFT = "slideLeft"
    SLIDE_RIGHT = "slideRight"
    SLIDE_UP = "slideUp"
    SLIDE_DOWN = "slideDown"

class ClipFilterEnum(str, Enum):
    BOOST = "boost"
    CONTRAST = "contrast"
    DARKEN = "darken"
    GREYSCALE = "greyscale"
    LIGHTEN = "lighten"
    MUTED = "muted"
    NEGATIVE = "negative"

class ClipFitEnum(str, Enum):
    COVER = "cover"
    CONTAIN = "contain"
    CROP = "crop"
    NONE = "none"

class ClipPositionEnum(str, Enum):
    TOP = "top"
    TOP_RIGHT = "topRight"
    RIGHT = "right"
    BOTTOM_RIGHT = "bottomRight"
    BOTTOM = "bottom"
    BOTTOM_LEFT = "bottomLeft"
    LEFT = "left"
    TOP_LEFT = "topLeft"
    CENTER = "center"


@dataclass_json
@dataclasses.dataclass
class Clip:
    r"""Clip
    A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
    """
    
    asset: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    length: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    start: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    effect: Optional[ClipEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    filter: Optional[ClipFilterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    fit: Optional[ClipFitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fit') }})
    offset: Optional[shared_offset.Offset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    opacity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opacity') }})
    position: Optional[ClipPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    scale: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    transition: Optional[shared_transition.Transition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transition') }})
    
