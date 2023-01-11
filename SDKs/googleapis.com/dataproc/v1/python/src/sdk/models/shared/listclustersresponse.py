import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cluster as shared_cluster


@dataclass_json
@dataclasses.dataclass
class ListClustersResponse:
    r"""ListClustersResponse
    The list of all clusters in a project.
    """
    
    clusters: Optional[list[shared_cluster.Cluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
