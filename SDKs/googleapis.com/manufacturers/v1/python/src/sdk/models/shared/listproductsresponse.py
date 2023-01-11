import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import product as shared_product


@dataclass_json
@dataclasses.dataclass
class ListProductsResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    products: Optional[list[shared_product.Product]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
