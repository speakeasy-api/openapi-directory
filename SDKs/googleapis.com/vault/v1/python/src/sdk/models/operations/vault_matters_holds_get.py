import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import hold as shared_hold


@dataclasses.dataclass
class VaultMattersHoldsGetPathParams:
    hold_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'holdId', 'style': 'simple', 'explode': False }})
    matter_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'matterId', 'style': 'simple', 'explode': False }})
    
class VaultMattersHoldsGetViewEnum(str, Enum):
    HOLD_VIEW_UNSPECIFIED = "HOLD_VIEW_UNSPECIFIED"
    BASIC_HOLD = "BASIC_HOLD"
    FULL_HOLD = "FULL_HOLD"


@dataclasses.dataclass
class VaultMattersHoldsGetQueryParams:
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
    view: Optional[VaultMattersHoldsGetViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VaultMattersHoldsGetSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class VaultMattersHoldsGetSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class VaultMattersHoldsGetSecurity:
    option1: Optional[VaultMattersHoldsGetSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[VaultMattersHoldsGetSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class VaultMattersHoldsGetRequest:
    path_params: VaultMattersHoldsGetPathParams = dataclasses.field()
    query_params: VaultMattersHoldsGetQueryParams = dataclasses.field()
    security: VaultMattersHoldsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class VaultMattersHoldsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    hold: Optional[shared_hold.Hold] = dataclasses.field(default=None)
    
