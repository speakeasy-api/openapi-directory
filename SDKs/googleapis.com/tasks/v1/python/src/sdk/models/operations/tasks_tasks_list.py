import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import tasks as shared_tasks


@dataclasses.dataclass
class TasksTasksListPathParams:
    tasklist: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tasklist', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TasksTasksListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    completed_max: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completedMax', 'style': 'form', 'explode': True }})
    completed_min: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completedMin', 'style': 'form', 'explode': True }})
    due_max: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dueMax', 'style': 'form', 'explode': True }})
    due_min: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dueMin', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_completed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showCompleted', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    show_hidden: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showHidden', 'style': 'form', 'explode': True }})
    updated_min: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedMin', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TasksTasksListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TasksTasksListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TasksTasksListSecurity:
    option1: Optional[TasksTasksListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[TasksTasksListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class TasksTasksListRequest:
    path_params: TasksTasksListPathParams = dataclasses.field()
    query_params: TasksTasksListQueryParams = dataclasses.field()
    security: TasksTasksListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TasksTasksListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tasks: Optional[shared_tasks.Tasks] = dataclasses.field(default=None)
    
