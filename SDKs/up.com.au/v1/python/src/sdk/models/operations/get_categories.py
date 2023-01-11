import dataclasses
from typing import Optional
from ..shared import listcategoriesresponse as shared_listcategoriesresponse


@dataclasses.dataclass
class GetCategoriesQueryParams:
    filter_parent_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[parent]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategoriesRequest:
    query_params: GetCategoriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_categories_response: Optional[shared_listcategoriesresponse.ListCategoriesResponse] = dataclasses.field(default=None)
    
