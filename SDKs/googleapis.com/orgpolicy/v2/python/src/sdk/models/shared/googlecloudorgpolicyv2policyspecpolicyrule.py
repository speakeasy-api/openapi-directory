import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypeexpr as shared_googletypeexpr
from ..shared import googlecloudorgpolicyv2policyspecpolicyrulestringvalues as shared_googlecloudorgpolicyv2policyspecpolicyrulestringvalues


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2PolicySpecPolicyRule:
    r"""GoogleCloudOrgpolicyV2PolicySpecPolicyRule
    A rule used to express this policy.
    """
    
    allow_all: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAll') }})
    condition: Optional[shared_googletypeexpr.GoogleTypeExpr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    deny_all: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyAll') }})
    enforce: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce') }})
    values: Optional[shared_googlecloudorgpolicyv2policyspecpolicyrulestringvalues.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
