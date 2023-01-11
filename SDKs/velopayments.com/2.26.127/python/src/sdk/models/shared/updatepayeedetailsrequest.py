import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeeaddress as shared_payeeaddress
from ..shared import challenge as shared_challenge
from ..shared import company as shared_company
from ..shared import individual as shared_individual
from ..shared import payeetype_enum as shared_payeetype_enum


@dataclass_json
@dataclasses.dataclass
class UpdatePayeeDetailsRequestInput:
    address: Optional[shared_payeeaddress.PayeeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    challenge: Optional[shared_challenge.Challenge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[shared_company.Company] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[shared_individual.IndividualInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payee_type: Optional[shared_payeetype_enum.PayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    
