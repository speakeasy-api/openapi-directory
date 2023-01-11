import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import thread as shared_thread


@dataclasses.dataclass
class ActivityListRepoNotificationsForAuthenticatedUserPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListRepoNotificationsForAuthenticatedUserQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    participating: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'participating', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListRepoNotificationsForAuthenticatedUserRequest:
    path_params: ActivityListRepoNotificationsForAuthenticatedUserPathParams = dataclasses.field()
    query_params: ActivityListRepoNotificationsForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListRepoNotificationsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    threads: Optional[list[shared_thread.Thread]] = dataclasses.field(default=None)
    
