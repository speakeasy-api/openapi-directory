import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googleappsdrivelabelsv2betalistlabelsresponse as shared_googleappsdrivelabelsv2betalistlabelsresponse

class DrivelabelsLabelsListMinimumRoleEnum(str, Enum):
    LABEL_ROLE_UNSPECIFIED = "LABEL_ROLE_UNSPECIFIED"
    READER = "READER"
    APPLIER = "APPLIER"
    ORGANIZER = "ORGANIZER"
    EDITOR = "EDITOR"

class DrivelabelsLabelsListViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclasses.dataclass
class DrivelabelsLabelsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    minimum_role: Optional[DrivelabelsLabelsListMinimumRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minimumRole', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    published_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publishedOnly', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useAdminAccess', 'style': 'form', 'explode': True }})
    view: Optional[DrivelabelsLabelsListViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DrivelabelsLabelsListRequest:
    query_params: DrivelabelsLabelsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DrivelabelsLabelsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_apps_drive_labels_v2beta_list_labels_response: Optional[shared_googleappsdrivelabelsv2betalistlabelsresponse.GoogleAppsDriveLabelsV2betaListLabelsResponse] = dataclasses.field(default=None)
    
