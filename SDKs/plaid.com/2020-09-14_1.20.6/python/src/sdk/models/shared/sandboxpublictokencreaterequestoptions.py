import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sandboxpublictokencreaterequestoptionstransactions as shared_sandboxpublictokencreaterequestoptionstransactions


@dataclass_json
@dataclasses.dataclass
class SandboxPublicTokenCreateRequestOptions:
    r"""SandboxPublicTokenCreateRequestOptions
    An optional set of options to be used when configuring the Item. If specified, must not be `null`.
    """
    
    override_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('override_password') }})
    override_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('override_username') }})
    transactions: Optional[shared_sandboxpublictokencreaterequestoptionstransactions.SandboxPublicTokenCreateRequestOptionsTransactions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    webhook: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
