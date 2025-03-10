"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BINLookupResponse:
    
    bin_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bin-number') }})
    r"""The BIN or IIN number"""  
    card_brand: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('card-brand') }})
    r"""The card brand (e.g. Visa or Mastercard)"""  
    card_category: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('card-category') }})
    r"""The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID"""  
    card_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('card-type') }})
    r"""The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD"""  
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country') }})
    r"""The full country name of the issuer"""  
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country-code') }})
    r"""The ISO 2-letter country code of the issuer"""  
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country-code3') }})
    r"""The ISO 3-letter country code of the issuer"""  
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('currency-code') }})
    r"""ISO 4217 currency code associated with the country of the issuer"""  
    ip_blocklisted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-blocklisted') }})
    r"""True if the customers IP is listed on one of our blocklists, see the <a href=\\"http://www.neutrinoapi.com/api/ip-blocklist/\\">IP Blocklist API</a>"""  
    ip_blocklists: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-blocklists') }})
    r"""An array of strings indicating which blocklists this IP is listed on"""  
    ip_city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-city') }})
    r"""The city of the customers IP (if detectable)"""  
    ip_country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-country') }})
    r"""The country of the customers IP"""  
    ip_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-country-code') }})
    r"""The ISO 2-letter country code of the customers IP"""  
    ip_country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-country-code3') }})
    r"""The ISO 3-letter country code of the customers IP"""  
    ip_matches_bin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-matches-bin') }})
    r"""True if the customers IP country matches the BIN country"""  
    ip_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip-region') }})
    r"""The region of the customers IP (if detectable)"""  
    is_commercial: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is-commercial') }})
    r"""Is this a commercial/business use card"""  
    is_prepaid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is-prepaid') }})
    r"""Is this a prepaid or prepaid reloadable card"""  
    issuer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('issuer') }})
    r"""The card issuer"""  
    issuer_phone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('issuer-phone') }})
    r"""The card issuers phone number"""  
    issuer_website: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('issuer-website') }})
    r"""The card issuers website"""  
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('valid') }})
    r"""Is this a valid BIN or IIN number"""  
    