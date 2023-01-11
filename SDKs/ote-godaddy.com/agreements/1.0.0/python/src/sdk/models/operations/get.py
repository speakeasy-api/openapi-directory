import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetQueryParams:
    keys: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'keys', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetHeaders:
    x_market_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Market-Id', 'style': 'simple', 'explode': False }})
    x_private_label_id: Optional[int] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Private-Label-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRequest:
    headers: GetHeaders = dataclasses.field()
    query_params: GetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    legal_agreements: Optional[list[Any]] = dataclasses.field(default=None)
    
