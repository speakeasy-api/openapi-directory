"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import validationca as shared_validationca
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class MTLSPolicy:
    r"""Specification of the MTLSPolicy."""
    
    client_validation_ca: Optional[list[shared_validationca.ValidationCA]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clientValidationCa'), 'exclude': lambda f: f is None }})
    r"""Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate."""  
    