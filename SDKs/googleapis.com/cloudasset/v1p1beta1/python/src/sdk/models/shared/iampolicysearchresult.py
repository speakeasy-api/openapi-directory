import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import explanation as shared_explanation
from ..shared import policy as shared_policy


@dataclass_json
@dataclasses.dataclass
class IamPolicySearchResult:
    r"""IamPolicySearchResult
    The result for an IAM policy search.
    """
    
    explanation: Optional[shared_explanation.Explanation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    policy: Optional[shared_policy.Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
