import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orgpolicy as shared_orgpolicy


@dataclass_json
@dataclasses.dataclass
class SetOrgPolicyRequest:
    r"""SetOrgPolicyRequest
    The request sent to the SetOrgPolicyRequest method.
    """
    
    policy: Optional[shared_orgpolicy.OrgPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
