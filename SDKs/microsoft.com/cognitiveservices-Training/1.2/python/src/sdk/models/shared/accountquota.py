import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import perprojectquota as shared_perprojectquota
from ..shared import quota as shared_quota


@dataclass_json
@dataclasses.dataclass
class AccountQuota:
    r"""AccountQuota
    Represents a set of quotas associated with an account
    """
    
    per_project: Optional[list[shared_perprojectquota.PerProjectQuota]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerProject') }})
    predictions: Optional[shared_quota.Quota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predictions') }})
    projects: Optional[shared_quota.Quota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projects') }})
    tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
