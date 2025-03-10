"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudIntegrationsV1alphaSuspensionAudit:
    r"""Contains when and by whom the suspension was resolved."""
    
    resolver: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolver'), 'exclude': lambda f: f is None }})
    r"""Email address of the person who resolved this suspension."""  
    resolve_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolveTime'), 'exclude': lambda f: f is None }})
    r"""Time at which this suspension was resolved."""  
    