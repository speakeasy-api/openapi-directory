import dataclasses
from typing import Optional
from ..shared import paginatedmemberelectionresult as shared_paginatedmemberelectionresult


@dataclasses.dataclass
class GetApplicationMemberElectionsPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationMemberElectionsQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApplicationMemberElectionsRequest:
    path_params: GetApplicationMemberElectionsPathParams = dataclasses.field()
    query_params: GetApplicationMemberElectionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationMemberElectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_member_election_result: Optional[shared_paginatedmemberelectionresult.PaginatedMemberElectionResult] = dataclasses.field(default=None)
    
