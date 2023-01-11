import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudrunmetadata as shared_cloudrunmetadata


@dataclass_json
@dataclasses.dataclass
class Metadata:
    r"""Metadata
    Metadata includes information associated with a `Rollout`.
    """
    
    cloud_run: Optional[shared_cloudrunmetadata.CloudRunMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    
