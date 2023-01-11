import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialcontent as shared_editorialcontent


@dataclasses.dataclass
class GetEditorialImagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEditorialImageQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialImageSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialImageRequest:
    path_params: GetEditorialImagePathParams = dataclasses.field()
    query_params: GetEditorialImageQueryParams = dataclasses.field()
    security: GetEditorialImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_content: Optional[shared_editorialcontent.EditorialContent] = dataclasses.field(default=None)
    
