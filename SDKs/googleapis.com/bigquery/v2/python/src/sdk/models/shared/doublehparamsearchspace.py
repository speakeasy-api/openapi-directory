"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import doublecandidates as shared_doublecandidates
from ..shared import doublerange as shared_doublerange
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DoubleHparamSearchSpace:
    r"""Search space for a double hyperparameter."""
    
    candidates: Optional[shared_doublecandidates.DoubleCandidates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('candidates'), 'exclude': lambda f: f is None }})
    r"""Discrete candidates of a double hyperparameter."""  
    range: Optional[shared_doublerange.DoubleRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('range'), 'exclude': lambda f: f is None }})
    r"""Range of a double hyperparameter."""  
    