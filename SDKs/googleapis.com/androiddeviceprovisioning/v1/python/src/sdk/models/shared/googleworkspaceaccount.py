import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleWorkspaceAccount:
    r"""GoogleWorkspaceAccount
    A Google Workspace customer.
    """
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    pre_provisioning_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preProvisioningTokens') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleWorkspaceAccountInput:
    r"""GoogleWorkspaceAccountInput
    A Google Workspace customer.
    """
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    
