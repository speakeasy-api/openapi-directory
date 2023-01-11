import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editoriallivefeed as shared_editoriallivefeed


@dataclasses.dataclass
class GetEditorialLivefeedPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEditorialLivefeedQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialLivefeedSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialLivefeedRequest:
    path_params: GetEditorialLivefeedPathParams = dataclasses.field()
    query_params: GetEditorialLivefeedQueryParams = dataclasses.field()
    security: GetEditorialLivefeedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialLivefeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_livefeed: Optional[shared_editoriallivefeed.EditorialLivefeed] = dataclasses.field(default=None)
    
