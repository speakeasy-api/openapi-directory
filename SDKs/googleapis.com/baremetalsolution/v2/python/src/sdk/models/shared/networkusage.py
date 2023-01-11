import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import network as shared_network


@dataclass_json
@dataclasses.dataclass
class NetworkUsage:
    r"""NetworkUsage
    Network with all used IP addresses.
    """
    
    network: Optional[shared_network.Network] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    used_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedIps') }})
    
