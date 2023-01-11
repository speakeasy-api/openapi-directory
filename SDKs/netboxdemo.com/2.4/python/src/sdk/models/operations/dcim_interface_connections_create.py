import dataclasses
from typing import Optional
from ..shared import writableinterfaceconnection as shared_writableinterfaceconnection
from ..shared import interfaceconnection as shared_interfaceconnection


@dataclasses.dataclass
class DcimInterfaceConnectionsCreateRequest:
    request: shared_writableinterfaceconnection.WritableInterfaceConnectionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfaceConnectionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface_connection: Optional[shared_interfaceconnection.InterfaceConnection] = dataclasses.field(default=None)
    
