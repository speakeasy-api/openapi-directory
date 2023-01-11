import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SocketAddressProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclasses.dataclass
class SocketAddress:
    r"""SocketAddress
    [#next-free-field: 7]
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    ipv4_compat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Compat') }})
    named_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedPort') }})
    port_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portValue') }})
    protocol: Optional[SocketAddressProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    resolver_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolverName') }})
    
