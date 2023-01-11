import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obactiveorhistoriccurrencyandamount as shared_obactiveorhistoriccurrencyandamount
from ..shared import obtransactioncashbalance as shared_obtransactioncashbalance
from ..shared import obcreditdebitcode_enum as shared_obcreditdebitcode_enum
from ..shared import obcashaccount6 as shared_obcashaccount6
from ..shared import proprietarybanktransactioncodestructure1 as shared_proprietarybanktransactioncodestructure1
from ..shared import obentrystatus1code_enum as shared_obentrystatus1code_enum


@dataclass_json
@dataclasses.dataclass
class ObTransaction6:
    r"""ObTransaction6
    Provides further details on an entry in the report.
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    booking_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookingDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_debit_indicator: shared_obcreditdebitcode_enum.ObCreditDebitCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    status: shared_obentrystatus1code_enum.ObEntryStatus1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    balance: Optional[shared_obtransactioncashbalance.ObTransactionCashBalance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Balance') }})
    creditor_account: Optional[shared_obcashaccount6.ObCashAccount6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    debtor_account: Optional[shared_obcashaccount6.ObCashAccount6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    proprietary_bank_transaction_code: Optional[shared_proprietarybanktransactioncodestructure1.ProprietaryBankTransactionCodeStructure1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProprietaryBankTransactionCode') }})
    transaction_information: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionInformation') }})
    transaction_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionReference') }})
    value_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
