"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import finetune as shared_finetune
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListFineTunesResponse:
    r"""OK"""
    
    data: list[shared_finetune.FineTune] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data') }})  
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('object') }})  
    