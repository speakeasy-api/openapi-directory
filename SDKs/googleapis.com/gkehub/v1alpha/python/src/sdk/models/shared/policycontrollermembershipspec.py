import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policycontrollerhubconfig as shared_policycontrollerhubconfig


@dataclass_json
@dataclasses.dataclass
class PolicyControllerMembershipSpec:
    r"""PolicyControllerMembershipSpec
    **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
    """
    
    policy_controller_hub_config: Optional[shared_policycontrollerhubconfig.PolicyControllerHubConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyControllerHubConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
