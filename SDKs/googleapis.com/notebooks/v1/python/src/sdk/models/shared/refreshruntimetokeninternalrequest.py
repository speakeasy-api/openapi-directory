import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RefreshRuntimeTokenInternalRequest:
    r"""RefreshRuntimeTokenInternalRequest
    Request for getting a new access token.
    """
    
    vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    
