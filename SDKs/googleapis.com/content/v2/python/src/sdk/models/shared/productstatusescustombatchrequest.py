import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productstatusescustombatchrequestentry as shared_productstatusescustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class ProductstatusesCustomBatchRequest:
    entries: Optional[list[shared_productstatusescustombatchrequestentry.ProductstatusesCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
