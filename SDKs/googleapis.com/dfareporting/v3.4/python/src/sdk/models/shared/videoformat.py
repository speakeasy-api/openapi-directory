"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import size as shared_size
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class VideoFormatFileTypeEnum(str, Enum):
    r"""File type of the video format."""
    FLV = 'FLV'
    THREEGPP = 'THREEGPP'
    MP4 = 'MP4'
    WEBM = 'WEBM'
    M3_U8 = 'M3U8'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class VideoFormat:
    r"""Contains information about supported video formats."""
    
    file_type: Optional[VideoFormatFileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fileType'), 'exclude': lambda f: f is None }})
    r"""File type of the video format."""  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""ID of the video format."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies what kind of resource this is. Value: the fixed string \\"dfareporting#videoFormat\\"."""  
    resolution: Optional[shared_size.Size] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolution'), 'exclude': lambda f: f is None }})
    r"""Represents the dimensions of ads, placements, creatives, or creative assets."""  
    target_bit_rate: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('targetBitRate'), 'exclude': lambda f: f is None }})
    r"""The target bit rate of this video format."""  
    