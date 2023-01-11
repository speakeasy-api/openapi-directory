import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PricingV2VoiceVoiceNumberInboundCallPrice:
    r"""PricingV2VoiceVoiceNumberInboundCallPrice
    The InboundCallPrice record
    """
    
    base_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    number_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    

@dataclass_json
@dataclasses.dataclass
class PricingV2VoiceVoiceNumberOutboundCallPrices:
    base_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    origination_prefixes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origination_prefixes') }})
    

@dataclass_json
@dataclasses.dataclass
class PricingV2VoiceVoiceNumber:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    destination_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_number') }})
    inbound_call_price: Optional[PricingV2VoiceVoiceNumberInboundCallPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_call_price') }})
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    origination_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origination_number') }})
    outbound_call_prices: Optional[list[PricingV2VoiceVoiceNumberOutboundCallPrices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_call_prices') }})
    price_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
