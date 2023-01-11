import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipe as shared_pipe
from ..shared import socketaddress as shared_socketaddress


@dataclass_json
@dataclasses.dataclass
class Address:
    r"""Address
    Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
    """
    
    pipe: Optional[shared_pipe.Pipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipe') }})
    socket_address: Optional[shared_socketaddress.SocketAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socketAddress') }})
    
