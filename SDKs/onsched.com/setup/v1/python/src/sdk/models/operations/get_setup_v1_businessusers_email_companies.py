import dataclasses
from typing import Optional
from ..shared import authorizedcompanylistviewmodel as shared_authorizedcompanylistviewmodel


@dataclasses.dataclass
class GetSetupV1BusinessusersEmailCompaniesPathParams:
    email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'email', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1BusinessusersEmailCompaniesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1BusinessusersEmailCompaniesRequest:
    path_params: GetSetupV1BusinessusersEmailCompaniesPathParams = dataclasses.field()
    query_params: GetSetupV1BusinessusersEmailCompaniesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1BusinessusersEmailCompaniesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorized_company_list_view_model: Optional[shared_authorizedcompanylistviewmodel.AuthorizedCompanyListViewModel] = dataclasses.field(default=None)
    
