import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nodepool as shared_nodepool


@dataclass_json
@dataclasses.dataclass
class RepairClusterRequest:
    r"""RepairClusterRequest
    A request to repair a cluster.
    """
    
    cluster_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    graceful_decommission_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracefulDecommissionTimeout') }})
    node_pools: Optional[list[shared_nodepool.NodePool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    parent_operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOperationId') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
