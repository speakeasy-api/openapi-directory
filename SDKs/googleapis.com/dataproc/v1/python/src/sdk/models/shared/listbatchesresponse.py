import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batch as shared_batch


@dataclass_json
@dataclasses.dataclass
class ListBatchesResponse:
    r"""ListBatchesResponse
    A list of batch workloads.
    """
    
    batches: Optional[list[shared_batch.Batch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batches') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
