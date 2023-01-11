import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeedstatus as shared_datafeedstatus
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class DatafeedstatusesCustomBatchResponseEntry:
    r"""DatafeedstatusesCustomBatchResponseEntry
    A batch entry encoding a single non-batch datafeedstatuses response.
    """
    
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    datafeed_status: Optional[shared_datafeedstatus.DatafeedStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeedStatus') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
