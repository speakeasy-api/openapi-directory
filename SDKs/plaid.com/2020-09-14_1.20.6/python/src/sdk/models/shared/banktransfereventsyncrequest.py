import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BankTransferEventSyncRequest:
    r"""BankTransferEventSyncRequest
    BankTransferEventSyncRequest defines the request schema for `/bank_transfer/event/sync`
    """
    
    after_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('after_id') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
