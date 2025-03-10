"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import condition as shared_condition
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class BasicLevelCombiningFunctionEnum(str, Enum):
    r"""How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND."""
    AND = 'AND'
    OR = 'OR'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BasicLevel:
    r"""`BasicLevel` is an `AccessLevel` using a set of recommended features."""
    
    combining_function: Optional[BasicLevelCombiningFunctionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('combiningFunction'), 'exclude': lambda f: f is None }})
    r"""How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND."""  
    conditions: Optional[list[shared_condition.Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('conditions'), 'exclude': lambda f: f is None }})
    r"""Required. A list of requirements for the `AccessLevel` to be granted."""  
    