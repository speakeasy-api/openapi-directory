import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RemoveBgJSONChannelsEnum(str, Enum):
    RGBA = "rgba"
    ALPHA = "alpha"

class RemoveBgJSONFormatEnum(str, Enum):
    AUTO = "auto"
    PNG = "png"
    JPG = "jpg"
    ZIP = "zip"

class RemoveBgJSONSizeEnum(str, Enum):
    PREVIEW = "preview"
    FULL = "full"
    AUTO = "auto"

class RemoveBgJSONTypeEnum(str, Enum):
    AUTO = "auto"
    PERSON = "person"
    PRODUCT = "product"
    CAR = "car"

class RemoveBgJSONTypeLevelEnum(str, Enum):
    NONE = "none"
    ONE = "1"
    TWO = "2"
    LATEST = "latest"


@dataclass_json
@dataclasses.dataclass
class RemoveBgJSON:
    add_shadow: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_shadow') }, 'form': { 'field_name': 'add_shadow' }})
    bg_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bg_color') }, 'form': { 'field_name': 'bg_color' }})
    bg_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bg_image_url') }, 'form': { 'field_name': 'bg_image_url' }})
    channels: Optional[RemoveBgJSONChannelsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }, 'form': { 'field_name': 'channels' }})
    crop: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }, 'form': { 'field_name': 'crop' }})
    crop_margin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop_margin') }, 'form': { 'field_name': 'crop_margin' }})
    format: Optional[RemoveBgJSONFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }, 'form': { 'field_name': 'format' }})
    image_file_b64: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_file_b64') }, 'form': { 'field_name': 'image_file_b64' }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }, 'form': { 'field_name': 'image_url' }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }, 'form': { 'field_name': 'position' }})
    roi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roi') }, 'form': { 'field_name': 'roi' }})
    scale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }, 'form': { 'field_name': 'scale' }})
    semitransparency: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('semitransparency') }, 'form': { 'field_name': 'semitransparency' }})
    size: Optional[RemoveBgJSONSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }, 'form': { 'field_name': 'size' }})
    type: Optional[RemoveBgJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }, 'form': { 'field_name': 'type' }})
    type_level: Optional[RemoveBgJSONTypeLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_level') }, 'form': { 'field_name': 'type_level' }})
    
