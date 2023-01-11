import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import depositswitchcreaterequestoptions as shared_depositswitchcreaterequestoptions

class DepositSwitchAltCreateRequestCountryCodeEnum(str, Enum):
    US = "US"
    CA = "CA"


@dataclass_json
@dataclasses.dataclass
class DepositSwitchAltCreateRequest:
    r"""DepositSwitchAltCreateRequest
    DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
    """
    
    target_account: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_account') }})
    target_user: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_user') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    country_code: Optional[DepositSwitchAltCreateRequestCountryCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    options: Optional[shared_depositswitchcreaterequestoptions.DepositSwitchCreateRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
