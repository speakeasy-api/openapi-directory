import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetStatusPathParams:
    shopper_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shopperId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatusQueryParams:
    audit_client_ip: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auditClientIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatusRequest:
    path_params: GetStatusPathParams = dataclasses.field()
    query_params: GetStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    shopper_status: Optional[Any] = dataclasses.field(default=None)
    
