import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shippingsettingscustombatchrequestentry as shared_shippingsettingscustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class ShippingsettingsCustomBatchRequest:
    entries: Optional[list[shared_shippingsettingscustombatchrequestentry.ShippingsettingsCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
