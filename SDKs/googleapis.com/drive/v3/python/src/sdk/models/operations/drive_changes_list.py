import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import changelist as shared_changelist


@dataclasses.dataclass
class DriveChangesListQueryParams:
    page_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    drive_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'driveId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_corpus_removals: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeCorpusRemovals', 'style': 'form', 'explode': True }})
    include_items_from_all_drives: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeItemsFromAllDrives', 'style': 'form', 'explode': True }})
    include_labels: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLabels', 'style': 'form', 'explode': True }})
    include_permissions_for_view: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includePermissionsForView', 'style': 'form', 'explode': True }})
    include_removed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeRemoved', 'style': 'form', 'explode': True }})
    include_team_drive_items: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTeamDriveItems', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    restrict_to_my_drive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'restrictToMyDrive', 'style': 'form', 'explode': True }})
    spaces: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spaces', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    team_drive_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'teamDriveId', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurityOption7:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DriveChangesListSecurity:
    option1: Optional[DriveChangesListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChangesListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveChangesListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveChangesListSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveChangesListSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveChangesListSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveChangesListSecurityOption7] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DriveChangesListRequest:
    query_params: DriveChangesListQueryParams = dataclasses.field()
    security: DriveChangesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DriveChangesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    change_list: Optional[shared_changelist.ChangeList] = dataclasses.field(default=None)
    
