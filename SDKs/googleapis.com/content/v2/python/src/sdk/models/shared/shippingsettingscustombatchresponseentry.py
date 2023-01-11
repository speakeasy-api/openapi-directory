import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errors as shared_errors
from ..shared import shippingsettings as shared_shippingsettings


@dataclass_json
@dataclasses.dataclass
class ShippingsettingsCustomBatchResponseEntry:
    r"""ShippingsettingsCustomBatchResponseEntry
    A batch entry encoding a single non-batch shipping settings response.
    """
    
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    shipping_settings: Optional[shared_shippingsettings.ShippingSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingSettings') }})
    
