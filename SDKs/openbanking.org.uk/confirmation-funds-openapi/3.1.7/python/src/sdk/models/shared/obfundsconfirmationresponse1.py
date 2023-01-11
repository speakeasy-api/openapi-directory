import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObFundsConfirmationResponse1DataInstructedAmount:
    r"""ObFundsConfirmationResponse1DataInstructedAmount
    Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObFundsConfirmationResponse1Data:
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funds_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsAvailable') }})
    funds_confirmation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FundsConfirmationId') }})
    instructed_amount: ObFundsConfirmationResponse1DataInstructedAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    

@dataclass_json
@dataclasses.dataclass
class ObFundsConfirmationResponse1:
    data: ObFundsConfirmationResponse1Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
