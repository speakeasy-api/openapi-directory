import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamp as shared_timestamp
from ..shared import environmentdimensionvalueentry as shared_environmentdimensionvalueentry
from ..shared import mergedresult as shared_mergedresult
from ..shared import resultsstorage as shared_resultsstorage
from ..shared import shardsummary as shared_shardsummary


@dataclass_json
@dataclasses.dataclass
class Environment:
    r"""Environment
    An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
    """
    
    completion_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    creation_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    dimension_value: Optional[list[shared_environmentdimensionvalueentry.EnvironmentDimensionValueEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValue') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    environment_result: Optional[shared_mergedresult.MergedResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentResult') }})
    execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    history_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    results_storage: Optional[shared_resultsstorage.ResultsStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsStorage') }})
    shard_summaries: Optional[list[shared_shardsummary.ShardSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardSummaries') }})
    
