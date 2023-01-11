import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import address as shared_address
from ..shared import creditoragent7_ch as shared_creditoragent7_ch
from ..shared import amount as shared_amount
from ..shared import purposecode_enum as shared_purposecode_enum
from ..shared import remittanceinformationstructured as shared_remittanceinformationstructured
from ..shared import transactionstatus_enum as shared_transactionstatus_enum


@dataclass_json
@dataclasses.dataclass
class PaymentInitiationWithStatusResponse:
    r"""PaymentInitiationWithStatusResponse
    Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.
    
    """
    
    creditor_account: shared_accountreference16_ch.AccountReference16Ch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAccount') }})
    creditor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorName') }})
    debtor_account: shared_accountreference16_ch.AccountReference16Ch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    instructed_amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedAmount') }})
    creditor_address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAddress') }})
    creditor_agent: Optional[shared_creditoragent7_ch.CreditorAgent7Ch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAgent') }})
    end_to_end_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endToEndIdentification') }})
    purpose_code: Optional[shared_purposecode_enum.PurposeCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[shared_remittanceinformationstructured.RemittanceInformationStructured] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_unstructured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    remittance_information_unstructured_array: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructuredArray') }})
    requested_execution_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_execution_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[shared_transactionstatus_enum.TransactionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    ultimate_creditor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    
