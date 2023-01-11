import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class StorageNotificationsDeletePathParams:
    bucket: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    notification: str = dataclasses.field(metadata={'path_param': { 'field_name': 'notification', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StorageNotificationsDeleteQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userProject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StorageNotificationsDeleteSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageNotificationsDeleteSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageNotificationsDeleteSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class StorageNotificationsDeleteSecurity:
    option1: Optional[StorageNotificationsDeleteSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[StorageNotificationsDeleteSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[StorageNotificationsDeleteSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class StorageNotificationsDeleteRequest:
    path_params: StorageNotificationsDeletePathParams = dataclasses.field()
    query_params: StorageNotificationsDeleteQueryParams = dataclasses.field()
    security: StorageNotificationsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StorageNotificationsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
