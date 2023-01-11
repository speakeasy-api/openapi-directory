import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import activities as shared_activities

class ReportsActivitiesListApplicationNameEnum(str, Enum):
    ACCESS_TRANSPARENCY = "access_transparency"
    ADMIN = "admin"
    CALENDAR = "calendar"
    CHAT = "chat"
    DRIVE = "drive"
    GCP = "gcp"
    GPLUS = "gplus"
    GROUPS = "groups"
    GROUPS_ENTERPRISE = "groups_enterprise"
    JAMBOARD = "jamboard"
    LOGIN = "login"
    MEET = "meet"
    MOBILE = "mobile"
    RULES = "rules"
    SAML = "saml"
    TOKEN = "token"
    USER_ACCOUNTS = "user_accounts"
    CONTEXT_AWARE_ACCESS = "context_aware_access"
    CHROME = "chrome"
    DATA_STUDIO = "data_studio"
    KEEP = "keep"


@dataclasses.dataclass
class ReportsActivitiesListPathParams:
    application_name: ReportsActivitiesListApplicationNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationName', 'style': 'simple', 'explode': False }})
    user_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReportsActivitiesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    actor_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'actorIpAddress', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customerId', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    event_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventName', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    group_id_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupIdFilter', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    org_unit_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orgUnitID', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReportsActivitiesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReportsActivitiesListRequest:
    path_params: ReportsActivitiesListPathParams = dataclasses.field()
    query_params: ReportsActivitiesListQueryParams = dataclasses.field()
    security: ReportsActivitiesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReportsActivitiesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activities: Optional[shared_activities.Activities] = dataclasses.field(default=None)
    
