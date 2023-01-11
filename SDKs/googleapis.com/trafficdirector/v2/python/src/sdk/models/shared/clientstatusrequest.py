import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nodematcher as shared_nodematcher


@dataclass_json
@dataclasses.dataclass
class ClientStatusRequest:
    r"""ClientStatusRequest
    Request for client status of clients identified by a list of NodeMatchers.
    """
    
    node_matchers: Optional[list[shared_nodematcher.NodeMatcher]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeMatchers') }})
    
