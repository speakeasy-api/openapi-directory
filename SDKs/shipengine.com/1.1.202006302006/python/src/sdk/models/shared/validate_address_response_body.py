import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import response_message as shared_response_message
from ..shared import address as shared_address
from ..shared import address_validation_status_enum as shared_address_validation_status_enum


@dataclass_json
@dataclasses.dataclass
class ValidateAddressResponseBodyPartialAddress:
    r"""ValidateAddressResponseBodyPartialAddress
    A complete or partial mailing address.
    """
    
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    address_residential_indicator: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_residential_indicator') }})
    city_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city_locality') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state_province: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_province') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    address_line3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line3') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    

@dataclass_json
@dataclasses.dataclass
class ValidateAddressResponseBody:
    r"""ValidateAddressResponseBody
    An address validation result
    """
    
    matched_address: ValidateAddressResponseBodyPartialAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matched_address') }})
    messages: list[shared_response_message.ResponseMessage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    original_address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_address') }})
    status: shared_address_validation_status_enum.AddressValidationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
