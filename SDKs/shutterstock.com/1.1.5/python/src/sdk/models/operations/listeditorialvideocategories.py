import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialvideocategoryresults as shared_editorialvideocategoryresults


@dataclasses.dataclass
class ListEditorialVideoCategoriesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListEditorialVideoCategoriesRequest:
    security: ListEditorialVideoCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListEditorialVideoCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_video_category_results: Optional[shared_editorialvideocategoryresults.EditorialVideoCategoryResults] = dataclasses.field(default=None)
    
