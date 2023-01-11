import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterconfigurationclustering as shared_clusterconfigurationclustering
from ..shared import clusterconfigurationrouting as shared_clusterconfigurationrouting


@dataclass_json
@dataclasses.dataclass
class ClusterConfiguration:
    clustering: Optional[shared_clusterconfigurationclustering.ClusterConfigurationClustering] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clustering') }})
    response_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_type') }})
    routing: Optional[shared_clusterconfigurationrouting.ClusterConfigurationRouting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    
