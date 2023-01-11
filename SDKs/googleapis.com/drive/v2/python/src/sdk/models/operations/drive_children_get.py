import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import childreference as shared_childreference


@dataclasses.dataclass
class DriveChildrenGetPathParams:
    child_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'childId', 'style': 'simple', 'explode': False }})
    folder_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DriveChildrenGetQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurityOption7:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChildrenGetSecurity:
    option1: Optional[DriveChildrenGetSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChildrenGetSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveChildrenGetSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveChildrenGetSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveChildrenGetSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveChildrenGetSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveChildrenGetSecurityOption7] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DriveChildrenGetRequest:
    path_params: DriveChildrenGetPathParams = dataclasses.field()
    query_params: DriveChildrenGetQueryParams = dataclasses.field()
    security: DriveChildrenGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DriveChildrenGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    child_reference: Optional[shared_childreference.ChildReference] = dataclasses.field(default=None)
    
