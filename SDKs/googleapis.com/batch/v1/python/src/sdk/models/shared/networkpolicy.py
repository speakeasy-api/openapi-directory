import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkinterface as shared_networkinterface


@dataclass_json
@dataclasses.dataclass
class NetworkPolicy:
    r"""NetworkPolicy
    NetworkPolicy describes VM instance network configurations.
    """
    
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    
