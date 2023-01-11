import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv1condition as shared_googlecloudrunv1condition


@dataclass_json
@dataclasses.dataclass
class RevisionStatus:
    r"""RevisionStatus
    RevisionStatus communicates the observed state of the Revision (from the controller).
    """
    
    conditions: Optional[list[shared_googlecloudrunv1condition.GoogleCloudRunV1Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    image_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    log_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUrl') }})
    observed_generation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
