import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchgetassetshistoryresponse as shared_batchgetassetshistoryresponse


@dataclasses.dataclass
class CloudassetProjectsBatchGetAssetsHistoryPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"


@dataclasses.dataclass
class CloudassetProjectsBatchGetAssetsHistoryQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    asset_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assetNames', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    content_type: Optional[CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_time_window_end_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'readTimeWindow.endTime', 'style': 'form', 'explode': True }})
    read_time_window_start_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'readTimeWindow.startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CloudassetProjectsBatchGetAssetsHistorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudassetProjectsBatchGetAssetsHistoryRequest:
    path_params: CloudassetProjectsBatchGetAssetsHistoryPathParams = dataclasses.field()
    query_params: CloudassetProjectsBatchGetAssetsHistoryQueryParams = dataclasses.field()
    security: CloudassetProjectsBatchGetAssetsHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CloudassetProjectsBatchGetAssetsHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_assets_history_response: Optional[shared_batchgetassetshistoryresponse.BatchGetAssetsHistoryResponse] = dataclasses.field(default=None)
    
