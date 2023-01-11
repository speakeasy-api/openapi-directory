import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketbytimeperiod as shared_bucketbytimeperiod


@dataclass_json
@dataclasses.dataclass
class BucketByTime:
    duration_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMillis') }})
    period: Optional[shared_bucketbytimeperiod.BucketByTimePeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
