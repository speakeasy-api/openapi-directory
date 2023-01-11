import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price
from ..shared import amount as shared_amount
from ..shared import productamount as shared_productamount


@dataclass_json
@dataclasses.dataclass
class OrderReportTransaction:
    disbursement_amount: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disbursementAmount') }})
    disbursement_creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disbursementCreationDate') }})
    disbursement_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disbursementDate') }})
    disbursement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disbursementId') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    product_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productAmount') }})
    product_amount_with_remitted_tax: Optional[shared_productamount.ProductAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productAmountWithRemittedTax') }})
    transaction_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDate') }})
    
