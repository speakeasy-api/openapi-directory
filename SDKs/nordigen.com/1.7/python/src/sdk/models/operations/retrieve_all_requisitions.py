import dataclasses
from typing import Optional
from ..shared import paginatedrequisitionlist as shared_paginatedrequisitionlist


@dataclasses.dataclass
class RetrieveAllRequisitionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveAllRequisitionsRequest:
    query_params: RetrieveAllRequisitionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAllRequisitionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_requisition_list: Optional[shared_paginatedrequisitionlist.PaginatedRequisitionList] = dataclasses.field(default=None)
    
