import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import commentreply as shared_commentreply


@dataclasses.dataclass
class DriveRepliesUpdatePathParams:
    comment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    reply_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DriveRepliesUpdateQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DriveRepliesUpdateSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveRepliesUpdateSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveRepliesUpdateSecurity:
    option1: Optional[DriveRepliesUpdateSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveRepliesUpdateSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DriveRepliesUpdateRequest:
    path_params: DriveRepliesUpdatePathParams = dataclasses.field()
    query_params: DriveRepliesUpdateQueryParams = dataclasses.field()
    security: DriveRepliesUpdateSecurity = dataclasses.field()
    request: Optional[shared_commentreply.CommentReply] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DriveRepliesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_reply: Optional[shared_commentreply.CommentReply] = dataclasses.field(default=None)
    
