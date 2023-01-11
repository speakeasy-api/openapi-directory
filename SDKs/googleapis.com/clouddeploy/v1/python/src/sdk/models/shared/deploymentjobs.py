import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class DeploymentJobs:
    r"""DeploymentJobs
    Deployment job composition.
    """
    
    deploy_job: Optional[shared_job.Job] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployJob') }})
    verify_job: Optional[shared_job.Job] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyJob') }})
    
