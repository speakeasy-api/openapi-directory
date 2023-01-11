import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetMeFavoritesIdsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeFavoritesIdsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeFavoritesIdsRequest:
    query_params: GetMeFavoritesIdsQueryParams = dataclasses.field()
    security: GetMeFavoritesIdsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeFavoritesIdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
