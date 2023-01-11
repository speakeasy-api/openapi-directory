import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteListingsQueryParams:
    domains: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'domains', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class DeleteListingsRequest:
    query_params: DeleteListingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteListingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aftermarket_listing_action: Optional[Any] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    
