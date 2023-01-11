import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import discountresponse as shared_discountresponse
from ..shared import productresponse as shared_productresponse


@dataclass_json
@dataclasses.dataclass
class LibraryResponse:
    deleted_discounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedDiscounts') }})
    deleted_products: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedProducts') }})
    discounts: Optional[list[shared_discountresponse.DiscountResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discounts') }})
    from_event_log_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEventLogUuid') }})
    products: Optional[list[shared_productresponse.ProductResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    until_event_log_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untilEventLogUuid') }})
    
