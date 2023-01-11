import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDActivitiesPathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    
class GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

class GetWorkspaceIDMembersMemberIDActivitiesItemsEnum(str, Enum):
    TEN = "10"
    FIFTY = "50"
    ONE_HUNDRED = "100"

class GetWorkspaceIDMembersMemberIDActivitiesSortEnum(str, Enum):
    OCCURRED_AT = "occurred_at"
    MEMBER = "member"


@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDActivitiesQueryParams:
    activity_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'activity_type', 'style': 'form', 'explode': True }})
    direction: Optional[GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    items: Optional[GetWorkspaceIDMembersMemberIDActivitiesItemsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'items', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[GetWorkspaceIDMembersMemberIDActivitiesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDActivitiesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDActivitiesRequest:
    path_params: GetWorkspaceIDMembersMemberIDActivitiesPathParams = dataclasses.field()
    query_params: GetWorkspaceIDMembersMemberIDActivitiesQueryParams = dataclasses.field()
    security: GetWorkspaceIDMembersMemberIDActivitiesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceIDMembersMemberIDActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
