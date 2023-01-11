import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectiontype as shared_connectiontype


@dataclass_json
@dataclasses.dataclass
class ConnectionTypesListResponse:
    r"""ConnectionTypesListResponse
    Connection Type List Response
    """
    
    connection_types: Optional[list[shared_connectiontype.ConnectionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionTypes') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
