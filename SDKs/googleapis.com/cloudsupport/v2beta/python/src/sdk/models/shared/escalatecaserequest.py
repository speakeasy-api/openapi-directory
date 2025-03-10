"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import escalation as shared_escalation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EscalateCaseRequest:
    r"""The request message for the EscalateCase endpoint."""
    
    escalation: Optional[shared_escalation.Escalation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('escalation'), 'exclude': lambda f: f is None }})
    r"""An escalation of a support case."""  
    