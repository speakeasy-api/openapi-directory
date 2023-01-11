import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import connection as shared_connection
from ..shared import error as shared_error


@dataclasses.dataclass
class GetMeConnectionsConnectionIDPathParams:
    connection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'connection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMeConnectionsConnectionIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeConnectionsConnectionIDRequest:
    path_params: GetMeConnectionsConnectionIDPathParams = dataclasses.field()
    security: GetMeConnectionsConnectionIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeConnectionsConnectionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection: Optional[shared_connection.Connection] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
