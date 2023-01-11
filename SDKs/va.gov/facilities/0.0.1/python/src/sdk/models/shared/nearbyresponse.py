import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nearby as shared_nearby
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class NearbyResponse:
    data: list[shared_nearby.Nearby] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
