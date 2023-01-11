import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialimagelivefeed as shared_editorialimagelivefeed


@dataclasses.dataclass
class GetEditorialImageLivefeedPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEditorialImageLivefeedQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialImageLivefeedSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialImageLivefeedRequest:
    path_params: GetEditorialImageLivefeedPathParams = dataclasses.field()
    query_params: GetEditorialImageLivefeedQueryParams = dataclasses.field()
    security: GetEditorialImageLivefeedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialImageLivefeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_image_livefeed: Optional[shared_editorialimagelivefeed.EditorialImageLivefeed] = dataclasses.field(default=None)
    
