"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ColorInfo:
    r"""An object providing additional metadata describing color attributes."""
    
    accent_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accentColor'), 'exclude': lambda f: f is None }})
    r"""Possible accent color."""  
    dominant_color_background: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dominantColorBackground'), 'exclude': lambda f: f is None }})
    r"""Possible dominant background color."""  
    dominant_color_foreground: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dominantColorForeground'), 'exclude': lambda f: f is None }})
    r"""Possible dominant foreground color."""  
    dominant_colors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dominantColors'), 'exclude': lambda f: f is None }})
    r"""An array of possible dominant colors."""  
    is_bw_img: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isBWImg'), 'exclude': lambda f: f is None }})
    r"""A value indicating if the image is black and white."""  
    