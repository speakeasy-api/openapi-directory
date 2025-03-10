"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import extramaterial as shared_extramaterial
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Feedback:
    r"""Feedback for a respondent about their response to a question."""
    
    material: Optional[list[shared_extramaterial.ExtraMaterial]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('material'), 'exclude': lambda f: f is None }})
    r"""Additional information provided as part of the feedback, often used to point the respondent to more reading and resources."""  
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('text'), 'exclude': lambda f: f is None }})
    r"""Required. The main text of the feedback."""  
    