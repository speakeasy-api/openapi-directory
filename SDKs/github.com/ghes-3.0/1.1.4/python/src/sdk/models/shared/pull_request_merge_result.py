"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PullRequestMergeResult:
    r"""Pull Request Merge Result"""
    
    merged: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('merged') }})  
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sha') }})  
    