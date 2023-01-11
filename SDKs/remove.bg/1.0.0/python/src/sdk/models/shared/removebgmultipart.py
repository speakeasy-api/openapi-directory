import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class RemoveBgMultipartBgImageFile:
    bg_image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'bg_image_file' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    
class RemoveBgMultipartChannelsEnum(str, Enum):
    RGBA = "rgba"
    ALPHA = "alpha"

class RemoveBgMultipartFormatEnum(str, Enum):
    AUTO = "auto"
    PNG = "png"
    JPG = "jpg"
    ZIP = "zip"


@dataclasses.dataclass
class RemoveBgMultipartImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'image_file' }})
    
class RemoveBgMultipartSizeEnum(str, Enum):
    PREVIEW = "preview"
    FULL = "full"
    AUTO = "auto"

class RemoveBgMultipartTypeEnum(str, Enum):
    AUTO = "auto"
    PERSON = "person"
    PRODUCT = "product"
    CAR = "car"

class RemoveBgMultipartTypeLevelEnum(str, Enum):
    NONE = "none"
    ONE = "1"
    TWO = "2"
    LATEST = "latest"


@dataclasses.dataclass
class RemoveBgMultipart:
    add_shadow: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'add_shadow' }})
    bg_color: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'bg_color' }})
    bg_image_file: Optional[RemoveBgMultipartBgImageFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    bg_image_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'bg_image_url' }})
    channels: Optional[RemoveBgMultipartChannelsEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'channels' }})
    crop: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'crop' }})
    crop_margin: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'crop_margin' }})
    format: Optional[RemoveBgMultipartFormatEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'format' }})
    image_file: Optional[RemoveBgMultipartImageFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    image_file_b64: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'image_file_b64' }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'image_url' }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'position' }})
    roi: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'roi' }})
    scale: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'scale' }})
    semitransparency: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'semitransparency' }})
    size: Optional[RemoveBgMultipartSizeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'size' }})
    type: Optional[RemoveBgMultipartTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    type_level: Optional[RemoveBgMultipartTypeLevelEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type_level' }})
    
