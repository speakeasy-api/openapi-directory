import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectionperiod as shared_collectionperiod
from ..shared import key as shared_key
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class Record:
    r"""Record
    Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
    """
    
    collection_period: Optional[shared_collectionperiod.CollectionPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionPeriod') }})
    key: Optional[shared_key.Key] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metrics: Optional[dict[str, shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
