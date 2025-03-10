"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Version:
    r"""Version object"""
    
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('from') }})
    r"""Semantic Version to use as the base fork"""  
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('version') }})
    r"""Semantic Version"""  
    codename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('codename'), 'exclude': lambda f: f is None }})
    r"""Dubbed name of version"""  
    is_beta: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_beta'), 'exclude': lambda f: f is None }})  
    is_deprecated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_deprecated'), 'exclude': lambda f: f is None }})
    r"""Should this be deprecated? Only allowed in PUT operations"""  
    is_hidden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_hidden'), 'exclude': lambda f: f is None }})
    r"""Should this be publically accessible?"""  
    is_stable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_stable'), 'exclude': lambda f: f is None }})
    r"""Should this be the **main** version"""  
    