import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import loginprofile as shared_loginprofile


@dataclasses.dataclass
class OsloginUsersGetLoginProfilePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class OsloginUsersGetLoginProfileOperatingSystemTypeEnum(str, Enum):
    OPERATING_SYSTEM_TYPE_UNSPECIFIED = "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    LINUX = "LINUX"
    WINDOWS = "WINDOWS"

class OsloginUsersGetLoginProfileViewEnum(str, Enum):
    LOGIN_PROFILE_VIEW_UNSPECIFIED = "LOGIN_PROFILE_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    SECURITY_KEY = "SECURITY_KEY"


@dataclasses.dataclass
class OsloginUsersGetLoginProfileQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    operating_system_type: Optional[OsloginUsersGetLoginProfileOperatingSystemTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'operatingSystemType', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    system_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'systemId', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[OsloginUsersGetLoginProfileViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileSecurity:
    option1: Optional[OsloginUsersGetLoginProfileSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[OsloginUsersGetLoginProfileSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[OsloginUsersGetLoginProfileSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[OsloginUsersGetLoginProfileSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileRequest:
    path_params: OsloginUsersGetLoginProfilePathParams = dataclasses.field()
    query_params: OsloginUsersGetLoginProfileQueryParams = dataclasses.field()
    security: OsloginUsersGetLoginProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OsloginUsersGetLoginProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    login_profile: Optional[shared_loginprofile.LoginProfile] = dataclasses.field(default=None)
    
