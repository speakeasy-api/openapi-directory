"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ScopeLifecycleStateCodeEnum(str, Enum):
    r"""Output only. The current state of the scope resource."""
    CODE_UNSPECIFIED = 'CODE_UNSPECIFIED'
    CREATING = 'CREATING'
    READY = 'READY'
    DELETING = 'DELETING'
    UPDATING = 'UPDATING'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ScopeLifecycleState:
    r"""ScopeLifecycleState describes the state of a Scope resource."""
    
    code: Optional[ScopeLifecycleStateCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})
    r"""Output only. The current state of the scope resource."""  
    