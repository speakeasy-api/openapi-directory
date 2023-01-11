import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import googleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest as shared_googleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest
from ..shared import googleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse as shared_googleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse


@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsBatchUpdateQueryParams:
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
    

@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest:
    path_params: DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams = dataclasses.field()
    query_params: DrivelabelsLabelsRevisionsPermissionsBatchUpdateQueryParams = dataclasses.field()
    request: Optional[shared_googleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_apps_drive_labels_v2beta_batch_update_label_permissions_response: Optional[shared_googleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse] = dataclasses.field(default=None)
    
