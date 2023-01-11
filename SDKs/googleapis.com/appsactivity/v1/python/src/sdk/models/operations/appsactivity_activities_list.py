import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listactivitiesresponse as shared_listactivitiesresponse

class AppsactivityActivitiesListGroupingStrategyEnum(str, Enum):
    DRIVE_UI = "driveUi"
    NONE = "none"


@dataclasses.dataclass
class AppsactivityActivitiesListQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    drive_ancestor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drive.ancestorId', 'style': 'form', 'explode': True }})
    drive_file_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drive.fileId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    grouping_strategy: Optional[AppsactivityActivitiesListGroupingStrategyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupingStrategy', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsactivityActivitiesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppsactivityActivitiesListRequest:
    query_params: AppsactivityActivitiesListQueryParams = dataclasses.field()
    security: AppsactivityActivitiesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppsactivityActivitiesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_activities_response: Optional[shared_listactivitiesresponse.ListActivitiesResponse] = dataclasses.field(default=None)
    
