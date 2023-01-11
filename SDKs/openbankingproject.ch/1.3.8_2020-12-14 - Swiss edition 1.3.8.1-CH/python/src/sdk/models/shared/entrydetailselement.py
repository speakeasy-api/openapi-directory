import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import reportexchangerate as shared_reportexchangerate
from ..shared import purposecode_enum as shared_purposecode_enum
from ..shared import remittanceinformationstructured as shared_remittanceinformationstructured
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class EntryDetailsElement:
    transaction_amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionAmount') }})
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
    mandate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateId') }})
    purpose_code: Optional[shared_purposecode_enum.PurposeCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[shared_remittanceinformationstructured.RemittanceInformationStructured] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_structured_array: Optional[list[shared_remittanceinformationstructured.RemittanceInformationStructured]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructuredArray') }})
    remittance_information_unstructured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    remittance_information_unstructured_array: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructuredArray') }})
    ultimate_creditor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    
