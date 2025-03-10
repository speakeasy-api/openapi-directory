"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ComponentSource:
    r"""Description of an interstitial value between transforms in an execution stage."""
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Dataflow service generated name for this source."""  
    original_transform_or_collection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('originalTransformOrCollection'), 'exclude': lambda f: f is None }})
    r"""User name for the original user transform or collection with which this source is most closely associated."""  
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('userName'), 'exclude': lambda f: f is None }})
    r"""Human-readable name for this transform; may be user or system generated."""  
    