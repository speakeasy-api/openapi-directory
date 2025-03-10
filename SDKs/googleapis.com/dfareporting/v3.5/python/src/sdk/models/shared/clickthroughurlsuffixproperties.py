"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ClickThroughURLSuffixProperties:
    r"""Click Through URL Suffix settings."""
    
    click_through_url_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clickThroughUrlSuffix'), 'exclude': lambda f: f is None }})
    r"""Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long."""  
    override_inherited_suffix: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('overrideInheritedSuffix'), 'exclude': lambda f: f is None }})
    r"""Whether this entity should override the inherited click-through URL suffix with its own defined value."""  
    