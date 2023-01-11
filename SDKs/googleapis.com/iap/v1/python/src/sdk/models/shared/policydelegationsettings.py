import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyname as shared_policyname
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class PolicyDelegationSettings:
    r"""PolicyDelegationSettings
    PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
    """
    
    iam_permission: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPermission') }})
    iam_service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamServiceName') }})
    policy_name: Optional[shared_policyname.PolicyName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyName') }})
    resource: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
