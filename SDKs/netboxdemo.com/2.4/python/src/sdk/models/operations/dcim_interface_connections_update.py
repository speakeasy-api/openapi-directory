import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableinterfaceconnection as shared_writableinterfaceconnection
from ..shared import interfaceconnection as shared_interfaceconnection


@dataclasses.dataclass
class DcimInterfaceConnectionsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfaceConnectionsUpdateRequest:
    path_params: DcimInterfaceConnectionsUpdatePathParams = dataclasses.field()
    request: shared_writableinterfaceconnection.WritableInterfaceConnectionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInterfaceConnectionsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface_connection: Optional[shared_interfaceconnection.InterfaceConnection] = dataclasses.field(default=None)
    
