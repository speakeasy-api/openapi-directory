import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudrunservice as shared_cloudrunservice


@dataclass_json
@dataclasses.dataclass
class Destination:
    r"""Destination
    Represents a target of an invocation over HTTP.
    """
    
    cloud_run_service: Optional[shared_cloudrunservice.CloudRunService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunService') }})
    
