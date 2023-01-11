import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productscustombatchrequestentry as shared_productscustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class ProductsCustomBatchRequest:
    entries: Optional[list[shared_productscustombatchrequestentry.ProductsCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
