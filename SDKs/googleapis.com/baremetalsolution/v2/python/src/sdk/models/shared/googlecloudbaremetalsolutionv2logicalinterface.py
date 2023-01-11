import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logicalnetworkinterface as shared_logicalnetworkinterface


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBaremetalsolutionV2LogicalInterface:
    r"""GoogleCloudBaremetalsolutionV2LogicalInterface
    Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
    """
    
    interface_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIndex') }})
    logical_network_interfaces: Optional[list[shared_logicalnetworkinterface.LogicalNetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalNetworkInterfaces') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
