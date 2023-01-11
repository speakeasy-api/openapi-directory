import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import paymentinitiationbulkelement_json as shared_paymentinitiationbulkelement_json
from ..shared import transactionstatus_enum as shared_transactionstatus_enum


@dataclass_json
@dataclasses.dataclass
class BulkPaymentInitiationWithStatusResponse:
    r"""BulkPaymentInitiationWithStatusResponse
    Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
    
    """
    
    debtor_account: shared_accountreference16_ch.AccountReference16Ch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    payments: list[shared_paymentinitiationbulkelement_json.PaymentInitiationBulkElementJSON] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    acceptor_transaction_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptorTransactionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    batch_booking_preferred: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchBookingPreferred') }})
    payment_information_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentInformationId') }})
    requested_execution_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[shared_transactionstatus_enum.TransactionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    
