"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BranchShortCommit:
    
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sha') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BranchShort:
    r"""Branch Short"""
    
    commit: BranchShortCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('commit') }})  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    protected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('protected') }})  
    