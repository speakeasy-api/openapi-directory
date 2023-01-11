import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialimagecategoryresults as shared_editorialimagecategoryresults


@dataclasses.dataclass
class ListEditorialImageCategoriesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListEditorialImageCategoriesRequest:
    security: ListEditorialImageCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListEditorialImageCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_image_category_results: Optional[shared_editorialimagecategoryresults.EditorialImageCategoryResults] = dataclasses.field(default=None)
    
