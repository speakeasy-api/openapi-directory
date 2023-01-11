import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productstatusescustombatchresponseentry as shared_productstatusescustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class ProductstatusesCustomBatchResponse:
    entries: Optional[list[shared_productstatusescustombatchresponseentry.ProductstatusesCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
