import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import connection as shared_connection
from ..shared import error as shared_error


@dataclasses.dataclass
class GetMeConnectionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeConnectionsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeConnectionsRequest:
    query_params: GetMeConnectionsQueryParams = dataclasses.field()
    security: GetMeConnectionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeConnectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connections: Optional[list[shared_connection.Connection]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
