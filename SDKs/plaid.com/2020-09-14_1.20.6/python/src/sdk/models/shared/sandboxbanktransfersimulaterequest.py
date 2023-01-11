import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SandboxBankTransferSimulateRequest:
    r"""SandboxBankTransferSimulateRequest
    SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
    """
    
    bank_transfer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_transfer_id') }})
    event_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    failure_reason: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_reason') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
