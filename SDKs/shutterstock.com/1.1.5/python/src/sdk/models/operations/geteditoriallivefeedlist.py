import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editoriallivefeedlist as shared_editoriallivefeedlist


@dataclasses.dataclass
class GetEditorialLivefeedListQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialLivefeedListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialLivefeedListRequest:
    query_params: GetEditorialLivefeedListQueryParams = dataclasses.field()
    security: GetEditorialLivefeedListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialLivefeedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_livefeed_list: Optional[shared_editoriallivefeedlist.EditorialLivefeedList] = dataclasses.field(default=None)
    
