import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialimagelivefeedlist as shared_editorialimagelivefeedlist


@dataclasses.dataclass
class GetEditorialImageLivefeedListQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialImageLivefeedListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialImageLivefeedListRequest:
    query_params: GetEditorialImageLivefeedListQueryParams = dataclasses.field()
    security: GetEditorialImageLivefeedListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialImageLivefeedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_image_livefeed_list: Optional[shared_editorialimagelivefeedlist.EditorialImageLivefeedList] = dataclasses.field(default=None)
    
