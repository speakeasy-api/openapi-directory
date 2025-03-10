"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudMlV1HyperparameterOutputHyperparameterMetric:
    r"""An observed value of a metric."""
    
    objective_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('objectiveValue'), 'exclude': lambda f: f is None }})
    r"""The objective value at this training step."""  
    training_step: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('trainingStep'), 'exclude': lambda f: f is None }})
    r"""The global training step for this metric."""  
    