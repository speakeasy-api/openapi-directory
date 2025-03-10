"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import tasktemplatespec as shared_tasktemplatespec
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ExecutionSpec:
    r"""ExecutionSpec describes how the execution will look."""
    
    parallelism: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('parallelism'), 'exclude': lambda f: f is None }})
    r"""Optional. Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism."""  
    task_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taskCount'), 'exclude': lambda f: f is None }})
    r"""Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1."""  
    template: Optional[shared_tasktemplatespec.TaskTemplateSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('template'), 'exclude': lambda f: f is None }})
    r"""TaskTemplateSpec describes the data a task should have when created from a template."""  
    