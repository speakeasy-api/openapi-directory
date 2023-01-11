import dataclasses
from typing import Optional
from ..shared import interfaceconnection as shared_interfaceconnection


@dataclasses.dataclass
class DcimInterfaceConnectionsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfaceConnectionsReadRequest:
    path_params: DcimInterfaceConnectionsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfaceConnectionsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface_connection: Optional[shared_interfaceconnection.InterfaceConnection] = dataclasses.field(default=None)
    
