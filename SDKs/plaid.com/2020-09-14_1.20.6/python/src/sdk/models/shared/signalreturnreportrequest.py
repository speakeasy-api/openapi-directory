import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SignalReturnReportRequest:
    client_transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_transaction_id') }})
    return_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_code') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
