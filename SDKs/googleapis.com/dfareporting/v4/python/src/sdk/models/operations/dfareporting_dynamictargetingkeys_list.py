import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import dynamictargetingkeyslistresponse as shared_dynamictargetingkeyslistresponse


@dataclasses.dataclass
class DfareportingDynamicTargetingKeysListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingDynamicTargetingKeysListObjectTypeEnum(str, Enum):
    OBJECT_ADVERTISER = "OBJECT_ADVERTISER"
    OBJECT_AD = "OBJECT_AD"
    OBJECT_CREATIVE = "OBJECT_CREATIVE"
    OBJECT_PLACEMENT = "OBJECT_PLACEMENT"


@dataclasses.dataclass
class DfareportingDynamicTargetingKeysListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'names', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    object_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectId', 'style': 'form', 'explode': True }})
    object_type: Optional[DfareportingDynamicTargetingKeysListObjectTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingDynamicTargetingKeysListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingDynamicTargetingKeysListRequest:
    path_params: DfareportingDynamicTargetingKeysListPathParams = dataclasses.field()
    query_params: DfareportingDynamicTargetingKeysListQueryParams = dataclasses.field()
    security: DfareportingDynamicTargetingKeysListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingDynamicTargetingKeysListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dynamic_targeting_keys_list_response: Optional[shared_dynamictargetingkeyslistresponse.DynamicTargetingKeysListResponse] = dataclasses.field(default=None)
    
