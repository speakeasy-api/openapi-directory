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
from ..shared import obexternalstandingorderstatus1code_enum as shared_obexternalstandingorderstatus1code_enum


@dataclass_json
@dataclasses.dataclass
class ObStandingOrder5:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    frequency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    creditor_account: Optional[shared_obcashaccount5.ObCashAccount5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    final_payment_amount: Optional[shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentAmount') }})
    final_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_amount: Optional[shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentAmount') }})
    first_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_payment_amount: Optional[shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPaymentAmount') }})
    last_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_payment_amount: Optional[shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPaymentAmount') }})
    next_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    standing_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandingOrderId') }})
    standing_order_status_code: Optional[shared_obexternalstandingorderstatus1code_enum.ObExternalStandingOrderStatus1CodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandingOrderStatusCode') }})
    
