"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DefaultClickThroughEventTagProperties:
    r"""Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further."""
    
    default_click_through_event_tag_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('defaultClickThroughEventTagId'), 'exclude': lambda f: f is None }})
    r"""ID of the click-through event tag to apply to all ads in this entity's scope."""  
    override_inherited_event_tag: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('overrideInheritedEventTag'), 'exclude': lambda f: f is None }})
    r"""Whether this entity should override the inherited default click-through event tag with its own defined value."""  
    