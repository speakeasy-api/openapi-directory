import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentdeviceid as shared_agentdeviceid


@dataclass_json
@dataclasses.dataclass
class QueryRequestPayload:
    r"""QueryRequestPayload
    Payload containing device IDs.
    """
    
    devices: Optional[list[shared_agentdeviceid.AgentDeviceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    
