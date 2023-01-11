import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordaccountingentrymodel as shared_landlordaccountingentrymodel
from ..shared import landlordaccountinginvoicemodel as shared_landlordaccountinginvoicemodel


@dataclass_json
@dataclasses.dataclass
class LandlordAccountingModel:
    r"""LandlordAccountingModel
    Landlord Accounting
    """
    
    account_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountBalance') }})
    last_payment: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPayment'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payment_history: Optional[list[shared_landlordaccountingentrymodel.LandlordAccountingEntryModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentHistory') }})
    statements: Optional[list[shared_landlordaccountinginvoicemodel.LandlordAccountingInvoiceModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statements') }})
    
