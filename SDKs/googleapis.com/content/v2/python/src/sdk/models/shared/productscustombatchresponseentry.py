import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errors as shared_errors
from ..shared import product as shared_product


@dataclass_json
@dataclasses.dataclass
class ProductsCustomBatchResponseEntry:
    r"""ProductsCustomBatchResponseEntry
    A batch entry encoding a single non-batch products response.
    """
    
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    product: Optional[shared_product.Product] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    
