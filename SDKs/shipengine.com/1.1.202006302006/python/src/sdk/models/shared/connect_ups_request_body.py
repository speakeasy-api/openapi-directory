import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ups_invoice as shared_ups_invoice


@dataclass_json
@dataclasses.dataclass
class ConnectUpsRequestBody:
    r"""ConnectUpsRequestBody
    A UPS account information request body
    """
    
    account_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_country_code') }})
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    account_postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_postal_code') }})
    address1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    agree_to_technology_agreement: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agree_to_technology_agreement') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    company: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    phone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    invoice: Optional[shared_ups_invoice.UpsInvoice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
