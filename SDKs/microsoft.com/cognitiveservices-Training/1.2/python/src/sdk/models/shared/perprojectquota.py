import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quota as shared_quota


@dataclass_json
@dataclasses.dataclass
class PerProjectQuota:
    r"""PerProjectQuota
    Represents a set of quotas for a given project
    """
    
    images: Optional[shared_quota.Quota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Images') }})
    iterations: Optional[shared_quota.Quota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iterations') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectId') }})
    tags: Optional[shared_quota.Quota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
