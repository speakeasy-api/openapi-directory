import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paging as shared_paging
from ..shared import externalunifiedevent as shared_externalunifiedevent


@dataclass_json
@dataclasses.dataclass
class CollectionResponseExternalUnifiedEvent:
    results: list[shared_externalunifiedevent.ExternalUnifiedEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    paging: Optional[shared_paging.Paging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    
