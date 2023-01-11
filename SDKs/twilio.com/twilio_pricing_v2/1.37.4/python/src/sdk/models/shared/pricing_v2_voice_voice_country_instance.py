import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PricingV2VoiceVoiceCountryInstanceInboundCallPrices:
    base_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    number_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    

@dataclass_json
@dataclasses.dataclass
class PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices:
    base_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_price') }})
    current_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_price') }})
    destination_prefixes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_prefixes') }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    origination_prefixes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origination_prefixes') }})
    

@dataclass_json
@dataclasses.dataclass
class PricingV2VoiceVoiceCountryInstance:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    inbound_call_prices: Optional[list[PricingV2VoiceVoiceCountryInstanceInboundCallPrices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_call_prices') }})
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    outbound_prefix_prices: Optional[list[PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_prefix_prices') }})
    price_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
