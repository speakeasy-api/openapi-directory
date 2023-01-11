import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mergedresult as shared_mergedresult


@dataclass_json
@dataclasses.dataclass
class ShardSummary:
    r"""ShardSummary
    Result summary for a shard in an environment.
    """
    
    runs: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    shard_result: Optional[shared_mergedresult.MergedResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardResult') }})
    
