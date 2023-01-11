import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationcycle as shared_replicationcycle


@dataclass_json
@dataclasses.dataclass
class ListReplicationCyclesResponse:
    r"""ListReplicationCyclesResponse
    Response message for 'ListReplicationCycles' request.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    replication_cycles: Optional[list[shared_replicationcycle.ReplicationCycle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationCycles') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
