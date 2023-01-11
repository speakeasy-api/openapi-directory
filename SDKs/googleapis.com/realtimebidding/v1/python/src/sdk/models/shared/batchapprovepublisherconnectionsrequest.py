import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchApprovePublisherConnectionsRequest:
    r"""BatchApprovePublisherConnectionsRequest
    A request to approve a batch of publisher connections.
    """
    
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    
