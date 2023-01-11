import dataclasses
from typing import Optional
from ..shared import paginatedcontactresult as shared_paginatedcontactresult


@dataclasses.dataclass
class GetContactListPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContactListQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContactListRequest:
    path_params: GetContactListPathParams = dataclasses.field()
    query_params: GetContactListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContactListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_contact_result: Optional[shared_paginatedcontactresult.PaginatedContactResult] = dataclasses.field(default=None)
    
