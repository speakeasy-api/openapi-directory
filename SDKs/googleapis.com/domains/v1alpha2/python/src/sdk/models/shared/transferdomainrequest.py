import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationcode as shared_authorizationcode
from ..shared import registration as shared_registration
from ..shared import money as shared_money

class TransferDomainRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"


@dataclass_json
@dataclasses.dataclass
class TransferDomainRequestInput:
    r"""TransferDomainRequestInput
    Request for the `TransferDomain` method.
    """
    
    authorization_code: Optional[shared_authorizationcode.AuthorizationCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationCode') }})
    contact_notices: Optional[list[TransferDomainRequestContactNoticesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactNotices') }})
    registration: Optional[shared_registration.RegistrationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    validate_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    yearly_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    
