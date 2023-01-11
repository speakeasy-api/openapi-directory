import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ordermerchantprovidedannotation as shared_ordermerchantprovidedannotation


@dataclass_json
@dataclasses.dataclass
class OrdersCustomBatchRequestEntrySetLineItemMetadata:
    annotations: Optional[list[shared_ordermerchantprovidedannotation.OrderMerchantProvidedAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
