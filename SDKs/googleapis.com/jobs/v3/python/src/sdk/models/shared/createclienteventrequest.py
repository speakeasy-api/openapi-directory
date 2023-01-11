import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientevent as shared_clientevent


@dataclass_json
@dataclasses.dataclass
class CreateClientEventRequest:
    r"""CreateClientEventRequest
    The report event request.
    """
    
    client_event: Optional[shared_clientevent.ClientEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientEvent') }})
    
