"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SchedulerResource:
    r"""Configuration for resources used by Airflow schedulers."""
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('count'), 'exclude': lambda f: f is None }})
    r"""Optional. The number of schedulers."""  
    cpu: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cpu'), 'exclude': lambda f: f is None }})
    r"""Optional. CPU request and limit for a single Airflow scheduler replica."""  
    memory_gb: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('memoryGb'), 'exclude': lambda f: f is None }})
    r"""Optional. Memory (GB) request and limit for a single Airflow scheduler replica."""  
    storage_gb: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('storageGb'), 'exclude': lambda f: f is None }})
    r"""Optional. Storage (GB) request and limit for a single Airflow scheduler replica."""  
    