import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pingconfig as shared_pingconfig


@dataclass_json
@dataclasses.dataclass
class TCPCheck:
    r"""TCPCheck
    Information required for a TCP Uptime check request.
    """
    
    ping_config: Optional[shared_pingconfig.PingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pingConfig') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
