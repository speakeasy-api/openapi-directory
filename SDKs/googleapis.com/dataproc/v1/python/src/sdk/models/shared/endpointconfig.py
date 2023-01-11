import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EndpointConfig:
    r"""EndpointConfig
    Endpoint config for this cluster
    """
    
    enable_http_port_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHttpPortAccess') }})
    http_ports: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpPorts') }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointConfigInput:
    r"""EndpointConfigInput
    Endpoint config for this cluster
    """
    
    enable_http_port_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHttpPortAccess') }})
    
