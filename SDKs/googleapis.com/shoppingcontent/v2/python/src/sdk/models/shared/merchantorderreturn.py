import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import merchantorderreturnitem as shared_merchantorderreturnitem
from ..shared import returnshipment as shared_returnshipment


@dataclass_json
@dataclasses.dataclass
class MerchantOrderReturn:
    r"""MerchantOrderReturn
    Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
    """
    
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_return_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderReturnId') }})
    return_items: Optional[list[shared_merchantorderreturnitem.MerchantOrderReturnItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnItems') }})
    return_shipments: Optional[list[shared_returnshipment.ReturnShipment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShipments') }})
    
