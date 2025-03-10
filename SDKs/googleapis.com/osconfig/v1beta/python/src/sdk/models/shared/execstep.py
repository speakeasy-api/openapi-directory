"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import execstepconfig as shared_execstepconfig
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ExecStep:
    r"""A step that runs an executable for a PatchJob."""
    
    linux_exec_step_config: Optional[shared_execstepconfig.ExecStepConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('linuxExecStepConfig'), 'exclude': lambda f: f is None }})
    r"""Common configurations for an ExecStep."""  
    windows_exec_step_config: Optional[shared_execstepconfig.ExecStepConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('windowsExecStepConfig'), 'exclude': lambda f: f is None }})
    r"""Common configurations for an ExecStep."""  
    