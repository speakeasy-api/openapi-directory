import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registration as shared_registration
from ..shared import money as shared_money

class RegisterDomainRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"

class RegisterDomainRequestDomainNoticesEnum(str, Enum):
    DOMAIN_NOTICE_UNSPECIFIED = "DOMAIN_NOTICE_UNSPECIFIED"
    HSTS_PRELOADED = "HSTS_PRELOADED"


@dataclass_json
@dataclasses.dataclass
class RegisterDomainRequestInput:
    r"""RegisterDomainRequestInput
    Request for the `RegisterDomain` method.
    """
    
    contact_notices: Optional[list[RegisterDomainRequestContactNoticesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactNotices') }})
    domain_notices: Optional[list[RegisterDomainRequestDomainNoticesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNotices') }})
    registration: Optional[shared_registration.RegistrationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    validate_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    yearly_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    
