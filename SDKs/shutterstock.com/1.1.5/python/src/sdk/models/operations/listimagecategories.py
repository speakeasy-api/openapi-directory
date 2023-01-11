import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import language_enum as shared_language_enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class ListImageCategoriesQueryParams:
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListImageCategoriesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListImageCategoriesRequest:
    query_params: ListImageCategoriesQueryParams = dataclasses.field()
    security: ListImageCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListImageCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    category_data_list: Optional[Any] = dataclasses.field(default=None)
    
