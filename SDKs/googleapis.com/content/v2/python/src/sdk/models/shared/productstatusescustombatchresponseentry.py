import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errors as shared_errors
from ..shared import productstatus as shared_productstatus


@dataclass_json
@dataclasses.dataclass
class ProductstatusesCustomBatchResponseEntry:
    r"""ProductstatusesCustomBatchResponseEntry
    A batch entry encoding a single non-batch productstatuses response.
    """
    
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    product_status: Optional[shared_productstatus.ProductStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productStatus') }})
    
