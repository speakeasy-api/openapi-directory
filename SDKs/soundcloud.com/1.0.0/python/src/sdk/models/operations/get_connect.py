import dataclasses
from typing import Optional
from enum import Enum
from ..shared import response_type_enum as shared_response_type_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetConnectQueryParams:
    client_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    redirect_uri: str = dataclasses.field(metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    response_type: shared_response_type_enum.ResponseTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'response_type', 'style': 'form', 'explode': True }})
    scope: str = dataclasses.field(metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConnectSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetConnectRequest:
    query_params: GetConnectQueryParams = dataclasses.field()
    security: GetConnectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetConnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_connect_302_application_json_string: Optional[str] = dataclasses.field(default=None)
    
