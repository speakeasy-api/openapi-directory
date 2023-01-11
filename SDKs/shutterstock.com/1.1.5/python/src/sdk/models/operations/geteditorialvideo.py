import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialvideocontent as shared_editorialvideocontent


@dataclasses.dataclass
class GetEditorialVideoPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEditorialVideoQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEditorialVideoSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialVideoRequest:
    path_params: GetEditorialVideoPathParams = dataclasses.field()
    query_params: GetEditorialVideoQueryParams = dataclasses.field()
    security: GetEditorialVideoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialVideoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_video_content: Optional[shared_editorialvideocontent.EditorialVideoContent] = dataclasses.field(default=None)
    
