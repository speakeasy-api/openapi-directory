import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testtargetsforshard as shared_testtargetsforshard


@dataclass_json
@dataclasses.dataclass
class Shard:
    r"""Shard
    Output only. Details about the shard.
    """
    
    num_shards: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numShards') }})
    shard_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardIndex') }})
    test_targets_for_shard: Optional[shared_testtargetsforshard.TestTargetsForShard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTargetsForShard') }})
    
