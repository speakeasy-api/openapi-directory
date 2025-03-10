"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FeedbackLoop:
    r"""[Feedback loop](https://support.google.com/mail/answer/6254652) identifier information."""
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Feedback loop identifier that uniquely identifies individual campaigns."""  
    spam_ratio: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('spamRatio'), 'exclude': lambda f: f is None }})
    r"""The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier."""  
    