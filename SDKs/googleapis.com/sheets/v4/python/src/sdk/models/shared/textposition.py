"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class TextPositionHorizontalAlignmentEnum(str, Enum):
    r"""Horizontal alignment setting for the piece of text."""
    HORIZONTAL_ALIGN_UNSPECIFIED = 'HORIZONTAL_ALIGN_UNSPECIFIED'
    LEFT = 'LEFT'
    CENTER = 'CENTER'
    RIGHT = 'RIGHT'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TextPosition:
    r"""Position settings for text."""
    
    horizontal_alignment: Optional[TextPositionHorizontalAlignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('horizontalAlignment'), 'exclude': lambda f: f is None }})
    r"""Horizontal alignment setting for the piece of text."""  
    