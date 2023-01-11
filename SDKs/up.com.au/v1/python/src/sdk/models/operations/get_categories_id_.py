import dataclasses
from typing import Optional
from ..shared import getcategoryresponse as shared_getcategoryresponse


@dataclasses.dataclass
class GetCategoriesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoriesIDRequest:
    path_params: GetCategoriesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoriesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_category_response: Optional[shared_getcategoryresponse.GetCategoryResponse] = dataclasses.field(default=None)
    
