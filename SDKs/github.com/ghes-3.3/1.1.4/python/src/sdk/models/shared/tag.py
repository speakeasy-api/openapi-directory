"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TagCommit:
    
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sha') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Tag:
    r"""Tag"""
    
    commit: TagCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('commit') }})  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('node_id') }})  
    tarball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tarball_url') }})  
    zipball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('zipball_url') }})  
    