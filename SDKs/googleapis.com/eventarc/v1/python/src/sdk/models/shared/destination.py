import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudrun as shared_cloudrun
from ..shared import gke as shared_gke


@dataclass_json
@dataclasses.dataclass
class Destination:
    r"""Destination
    Represents a target of an invocation over HTTP.
    """
    
    cloud_function: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFunction') }})
    cloud_run: Optional[shared_cloudrun.CloudRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    gke: Optional[shared_gke.Gke] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gke') }})
    workflow: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow') }})
    
