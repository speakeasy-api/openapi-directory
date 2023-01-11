import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import file as shared_file
from ..shared import file as shared_file


@dataclasses.dataclass
class DriveFilesPatchPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    
class DriveFilesPatchModifiedDateBehaviorEnum(str, Enum):
    FROM_BODY = "fromBody"
    FROM_BODY_IF_NEEDED = "fromBodyIfNeeded"
    FROM_BODY_OR_NOW = "fromBodyOrNow"
    NO_CHANGE = "noChange"
    NOW = "now"
    NOW_IF_NEEDED = "nowIfNeeded"


@dataclasses.dataclass
class DriveFilesPatchQueryParams:
    add_parents: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'addParents', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    convert: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'convert', 'style': 'form', 'explode': True }})
    enforce_single_parent: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enforceSingleParent', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_labels: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLabels', 'style': 'form', 'explode': True }})
    include_permissions_for_view: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includePermissionsForView', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    modified_date_behavior: Optional[DriveFilesPatchModifiedDateBehaviorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modifiedDateBehavior', 'style': 'form', 'explode': True }})
    new_revision: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newRevision', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    ocr: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ocr', 'style': 'form', 'explode': True }})
    ocr_language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ocrLanguage', 'style': 'form', 'explode': True }})
    pinned: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pinned', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    remove_parents: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'removeParents', 'style': 'form', 'explode': True }})
    set_modified_date: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setModifiedDate', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    timed_text_language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timedTextLanguage', 'style': 'form', 'explode': True }})
    timed_text_track_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timedTextTrackName', 'style': 'form', 'explode': True }})
    update_viewed_date: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updateViewedDate', 'style': 'form', 'explode': True }})
    use_content_as_indexable_text: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useContentAsIndexableText', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveFilesPatchSecurity:
    option1: Optional[DriveFilesPatchSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveFilesPatchSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveFilesPatchSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveFilesPatchSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveFilesPatchSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveFilesPatchSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DriveFilesPatchRequest:
    path_params: DriveFilesPatchPathParams = dataclasses.field()
    query_params: DriveFilesPatchQueryParams = dataclasses.field()
    security: DriveFilesPatchSecurity = dataclasses.field()
    request: Optional[shared_file.FileInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DriveFilesPatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file: Optional[shared_file.File] = dataclasses.field(default=None)
    
