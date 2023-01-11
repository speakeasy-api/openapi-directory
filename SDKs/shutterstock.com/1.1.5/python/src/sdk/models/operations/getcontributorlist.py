import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetContributorListQueryParams:
    id: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContributorListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetContributorListRequest:
    query_params: GetContributorListQueryParams = dataclasses.field()
    security: GetContributorListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetContributorListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contributor_profile_data_list: Optional[Any] = dataclasses.field(default=None)
    
