"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import proposal as shared_proposal
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateOrdersRequest:
    
    proposals: Optional[list[shared_proposal.Proposal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('proposals'), 'exclude': lambda f: f is None }})
    r"""The list of proposals to create."""  
    web_property_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('webPropertyCode'), 'exclude': lambda f: f is None }})
    r"""Web property id of the seller creating these orders"""  
    