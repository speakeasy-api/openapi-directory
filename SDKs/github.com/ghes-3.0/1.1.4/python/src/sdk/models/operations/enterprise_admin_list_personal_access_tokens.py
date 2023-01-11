import dataclasses
from typing import Optional
from ..shared import authorization as shared_authorization


@dataclasses.dataclass
class EnterpriseAdminListPersonalAccessTokensQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListPersonalAccessTokensRequest:
    query_params: EnterpriseAdminListPersonalAccessTokensQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListPersonalAccessTokensResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    authorizations: Optional[list[shared_authorization.Authorization]] = dataclasses.field(default=None)
    
