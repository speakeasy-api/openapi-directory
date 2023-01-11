import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import debtoragent7_ch as shared_debtoragent7_ch
from ..shared import paymentinitiationbulkelement_json as shared_paymentinitiationbulkelement_json


@dataclass_json
@dataclasses.dataclass
class BulkPaymentInitiationJSON:
    r"""BulkPaymentInitiationJSON
    Generic Body for a bulk payment initation via JSON.
    
    paymentInformationId is contained in code but commented since it is n.a.
    and not all ASPSP are able to support this field now.
    In a later version the field will be mandatory.
    
    """
    
    debtor_account: shared_accountreference16_ch.AccountReference16Ch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    debtor_agent: shared_debtoragent7_ch.DebtorAgent7Ch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAgent') }})
    payments: list[shared_paymentinitiationbulkelement_json.PaymentInitiationBulkElementJSON] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    batch_booking_preferred: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchBookingPreferred') }})
    requested_execution_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_execution_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
