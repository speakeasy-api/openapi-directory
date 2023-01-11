import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeeaddress_2 as shared_payeeaddress_2
from ..shared import challenge_2 as shared_challenge_2
from ..shared import company_2 as shared_company_2
from ..shared import individual_2 as shared_individual_2
from ..shared import payeetype_enum as shared_payeetype_enum


@dataclass_json
@dataclasses.dataclass
class UpdatePayeeDetailsRequest2Input:
    address: Optional[shared_payeeaddress_2.PayeeAddress2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    challenge: Optional[shared_challenge_2.Challenge2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[shared_company_2.Company2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[shared_individual_2.Individual2Input] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payee_type: Optional[shared_payeetype_enum.PayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    
