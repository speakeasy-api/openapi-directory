import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeletePathParams:
    shopper_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shopperId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteQueryParams:
    audit_client_ip: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auditClientIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteRequest:
    path_params: DeletePathParams = dataclasses.field()
    query_params: DeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    
