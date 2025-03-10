"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class VerifyPhoneNumberResponse:
    r"""Response message for the VerifyPhoneNumber method."""
    
    verified_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('verifiedPhoneNumber'), 'exclude': lambda f: f is None }})
    r"""Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number."""  
    