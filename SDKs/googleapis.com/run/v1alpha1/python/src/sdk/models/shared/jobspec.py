import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancetemplatespec as shared_instancetemplatespec


@dataclass_json
@dataclasses.dataclass
class JobSpec:
    r"""JobSpec
    JobSpec describes how the job execution will look like.
    """
    
    active_deadline_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDeadlineSeconds') }})
    backoff_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backoffLimit') }})
    completions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completions') }})
    parallelism: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    template: Optional[shared_instancetemplatespec.InstanceTemplateSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    ttl_seconds_after_finished: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttlSecondsAfterFinished') }})
    
