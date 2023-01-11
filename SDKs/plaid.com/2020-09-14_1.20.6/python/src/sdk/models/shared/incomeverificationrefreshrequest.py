import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IncomeVerificationRefreshRequest:
    r"""IncomeVerificationRefreshRequest
    IncomeVerificationRefreshRequest defines the request schema for `/income/verification/refresh`
    """
    
    income_verification_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification_id') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
