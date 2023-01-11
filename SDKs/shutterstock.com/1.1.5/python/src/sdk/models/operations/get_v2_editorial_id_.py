import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialcontent as shared_editorialcontent


@dataclasses.dataclass
class GetV2EditorialIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV2EditorialIDQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV2EditorialIDSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV2EditorialIDRequest:
    path_params: GetV2EditorialIDPathParams = dataclasses.field()
    query_params: GetV2EditorialIDQueryParams = dataclasses.field()
    security: GetV2EditorialIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV2EditorialIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_content: Optional[shared_editorialcontent.EditorialContent] = dataclasses.field(default=None)
    
