import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SandboxOauthSelectAccountsRequest:
    r"""SandboxOauthSelectAccountsRequest
    Defines the request schema for `sandbox/oauth/select_accounts`
    """
    
    accounts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    oauth_state_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_state_id') }})
    
