import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googleappsdrivelabelsv2betalabelpermission as shared_googleappsdrivelabelsv2betalabelpermission


@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsCreatePathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsCreateQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useAdminAccess', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsCreateRequest:
    path_params: DrivelabelsLabelsRevisionsPermissionsCreatePathParams = dataclasses.field()
    query_params: DrivelabelsLabelsRevisionsPermissionsCreateQueryParams = dataclasses.field()
    request: Optional[shared_googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_apps_drive_labels_v2beta_label_permission: Optional[shared_googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission] = dataclasses.field(default=None)
    
