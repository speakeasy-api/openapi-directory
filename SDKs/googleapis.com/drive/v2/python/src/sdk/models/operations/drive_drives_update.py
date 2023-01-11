import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import drive as shared_drive


@dataclasses.dataclass
class DriveDrivesUpdatePathParams:
    drive_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'driveId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DriveDrivesUpdateQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    use_domain_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useDomainAdminAccess', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DriveDrivesUpdateSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveDrivesUpdateRequest:
    path_params: DriveDrivesUpdatePathParams = dataclasses.field()
    query_params: DriveDrivesUpdateQueryParams = dataclasses.field()
    security: DriveDrivesUpdateSecurity = dataclasses.field()
    request: Optional[shared_drive.Drive] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DriveDrivesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    drive: Optional[shared_drive.Drive] = dataclasses.field(default=None)
    
