import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentchannelrule as shared_paymentchannelrule


@dataclass_json
@dataclasses.dataclass
class PaymentChannelCountry:
    iso_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isoCountryCode') }})
    rules: list[shared_paymentchannelrule.PaymentChannelRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
