import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import genrelist as shared_genrelist


@dataclasses.dataclass
class ListGenresSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListGenresRequest:
    security: ListGenresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListGenresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    genre_list: Optional[shared_genrelist.GenreList] = dataclasses.field(default=None)
    
