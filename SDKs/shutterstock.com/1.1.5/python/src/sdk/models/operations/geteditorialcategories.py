import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialcategoryresults as shared_editorialcategoryresults


@dataclasses.dataclass
class GetEditorialCategoriesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEditorialCategoriesRequest:
    security: GetEditorialCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEditorialCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_category_results: Optional[shared_editorialcategoryresults.EditorialCategoryResults] = dataclasses.field(default=None)
    
