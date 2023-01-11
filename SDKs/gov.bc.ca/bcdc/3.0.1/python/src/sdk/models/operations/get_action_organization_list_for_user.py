import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationListForUserQueryParams:
    permission: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'permission', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationListForUserRequest:
    query_params: GetActionOrganizationListForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationListForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
