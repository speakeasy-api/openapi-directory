import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentchannelcountry as shared_paymentchannelcountry


@dataclass_json
@dataclasses.dataclass
class PaymentChannelRulesResponse:
    bank: Optional[list[shared_paymentchannelcountry.PaymentChannelCountry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank') }})
    
