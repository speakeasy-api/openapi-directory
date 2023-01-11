import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeed as shared_datafeed
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class DatafeedsCustomBatchResponseEntry:
    r"""DatafeedsCustomBatchResponseEntry
    A batch entry encoding a single non-batch datafeeds response.
    """
    
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    datafeed: Optional[shared_datafeed.Datafeed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeed') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
