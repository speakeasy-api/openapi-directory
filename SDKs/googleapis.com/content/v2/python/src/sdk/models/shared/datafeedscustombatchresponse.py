import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeedscustombatchresponseentry as shared_datafeedscustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class DatafeedsCustomBatchResponse:
    entries: Optional[list[shared_datafeedscustombatchresponseentry.DatafeedsCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
