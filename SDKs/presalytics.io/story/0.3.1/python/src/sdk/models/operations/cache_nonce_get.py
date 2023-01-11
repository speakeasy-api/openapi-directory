import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CacheNonceGetPathParams:
    nonce: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nonce', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CacheNonceGetRequest:
    path_params: CacheNonceGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CacheNonceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    login_button: Optional[str] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
