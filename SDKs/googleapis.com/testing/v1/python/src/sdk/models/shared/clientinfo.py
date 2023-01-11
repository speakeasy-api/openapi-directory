import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientinfodetail as shared_clientinfodetail


@dataclass_json
@dataclasses.dataclass
class ClientInfo:
    r"""ClientInfo
    Information about the client which invoked the test.
    """
    
    client_info_details: Optional[list[shared_clientinfodetail.ClientInfoDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfoDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
