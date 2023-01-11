import dataclasses
from typing import Optional
from enum import Enum
from ..shared import org_enum2 as shared_org_enum2
from ..shared import org_enum3 as shared_org_enum3
from ..shared import simple_user as shared_simple_user
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class OrgsListMembersPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListMembersQueryParams:
    filter: Optional[shared_org_enum2.OrgEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[shared_org_enum3.OrgEnum3] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListMembersRequest:
    path_params: OrgsListMembersPathParams = dataclasses.field()
    query_params: OrgsListMembersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListMembersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
