import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessconfig as shared_accessconfig


@dataclass_json
@dataclasses.dataclass
class NetworkEndpoint:
    r"""NetworkEndpoint
    A network endpoint over which a TPU worker can be reached.
    """
    
    access_config: Optional[shared_accessconfig.AccessConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfig') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
