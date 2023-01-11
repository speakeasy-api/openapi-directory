import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shippingsettingscustombatchresponseentry as shared_shippingsettingscustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class ShippingsettingsCustomBatchResponse:
    entries: Optional[list[shared_shippingsettingscustombatchresponseentry.ShippingsettingsCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
