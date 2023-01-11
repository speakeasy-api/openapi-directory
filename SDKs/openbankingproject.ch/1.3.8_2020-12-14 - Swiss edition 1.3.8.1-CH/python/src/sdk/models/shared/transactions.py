import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import additionalinformationstructured as shared_additionalinformationstructured
from ..shared import balance as shared_balance
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import reportexchangerate as shared_reportexchangerate
from ..shared import entrydetailselement as shared_entrydetailselement
from ..shared import purposecode_enum as shared_purposecode_enum
from ..shared import remittanceinformationstructured as shared_remittanceinformationstructured
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class Transactions:
    r"""Transactions
    Transaction details.
    """
    
    transaction_amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionAmount') }})
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    additional_information: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformation') }})
    additional_information_structured: Optional[shared_additionalinformationstructured.AdditionalInformationStructured] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformationStructured') }})
    balance_after_transaction: Optional[shared_balance.Balance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceAfterTransaction') }})
    bank_transaction_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankTransactionCode') }})
    batch_indicator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchIndicator') }})
    batch_number_of_transactions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchNumberOfTransactions') }})
    booking_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    check_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    creditor_account: Optional[shared_accountreference16_ch.AccountReference16Ch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAccount') }})
    creditor_agent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAgent') }})
    creditor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorId') }})
    creditor_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorName') }})
    currency_exchange: Optional[list[shared_reportexchangerate.ReportExchangeRate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyExchange') }})
    debtor_account: Optional[shared_accountreference16_ch.AccountReference16Ch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    debtor_agent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAgent') }})
    debtor_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorName') }})
    end_to_end_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endToEndId') }})
    entry_details: Optional[list[shared_entrydetailselement.EntryDetailsElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryDetails') }})
    entry_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryReference') }})
    mandate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateId') }})
    proprietary_bank_transaction_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proprietaryBankTransactionCode') }})
    purpose_code: Optional[shared_purposecode_enum.PurposeCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_structured_array: Optional[list[shared_remittanceinformationstructured.RemittanceInformationStructured]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructuredArray') }})
    remittance_information_unstructured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    remittance_information_unstructured_array: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructuredArray') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    ultimate_creditor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    value_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
