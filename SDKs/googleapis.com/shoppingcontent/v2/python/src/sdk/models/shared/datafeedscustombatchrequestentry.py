import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeed as shared_datafeed


@dataclass_json
@dataclasses.dataclass
class DatafeedsCustomBatchRequestEntry:
    r"""DatafeedsCustomBatchRequestEntry
    A batch entry encoding a single non-batch datafeeds request.
    """
    
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    datafeed: Optional[shared_datafeed.Datafeed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeed') }})
    datafeed_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeedId') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
