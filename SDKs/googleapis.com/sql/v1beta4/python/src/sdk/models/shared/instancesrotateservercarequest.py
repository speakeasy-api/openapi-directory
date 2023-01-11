import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rotateservercacontext as shared_rotateservercacontext


@dataclass_json
@dataclasses.dataclass
class InstancesRotateServerCaRequest:
    r"""InstancesRotateServerCaRequest
    Rotate Server CA request.
    """
    
    rotate_server_ca_context: Optional[shared_rotateservercacontext.RotateServerCaContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotateServerCaContext') }})
    
