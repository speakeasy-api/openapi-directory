import dataclasses
from typing import Optional
from ..shared import paginatedenduseragreementlist as shared_paginatedenduseragreementlist


@dataclasses.dataclass
class RetrieveAllEuAsForAnEndUserQueryParams:
    enduser_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'enduser_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveAllEuAsForAnEndUserRequest:
    query_params: RetrieveAllEuAsForAnEndUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAllEuAsForAnEndUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_end_user_agreement_list: Optional[shared_paginatedenduseragreementlist.PaginatedEndUserAgreementList] = dataclasses.field(default=None)
    
