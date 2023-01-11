import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obcashaccount5 as shared_obcashaccount5
from ..shared import obactiveorhistoriccurrencyandamount as shared_obactiveorhistoriccurrencyandamount
from ..shared import obexternalscheduletype1code_enum as shared_obexternalscheduletype1code_enum


@dataclass_json
@dataclasses.dataclass
class ObScheduledPayment3:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    instructed_amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    scheduled_payment_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_type: shared_obexternalscheduletype1code_enum.ObExternalScheduleType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledType') }})
    creditor_account: Optional[shared_obcashaccount5.ObCashAccount5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    debtor_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorReference') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    scheduled_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPaymentId') }})
    
