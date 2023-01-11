import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import depositswitchcreaterequestoptions as shared_depositswitchcreaterequestoptions

class DepositSwitchCreateRequestCountryCodeEnum(str, Enum):
    US = "US"
    CA = "CA"


@dataclass_json
@dataclasses.dataclass
class DepositSwitchCreateRequest:
    r"""DepositSwitchCreateRequest
    DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
    """
    
    target_access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_access_token') }})
    target_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_account_id') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    country_code: Optional[DepositSwitchCreateRequestCountryCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    options: Optional[shared_depositswitchcreaterequestoptions.DepositSwitchCreateRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
