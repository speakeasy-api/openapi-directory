import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import liasettingscustombatchresponseentry as shared_liasettingscustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class LiasettingsCustomBatchResponse:
    entries: Optional[list[shared_liasettingscustombatchresponseentry.LiasettingsCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
