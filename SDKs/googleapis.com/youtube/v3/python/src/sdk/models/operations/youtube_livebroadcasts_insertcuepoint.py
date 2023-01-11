import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import cuepoint as shared_cuepoint


@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwnerChannel', 'style': 'form', 'explode': True }})
    part: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointSecurity:
    option1: Optional[YoutubeLiveBroadcastsInsertCuepointSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeLiveBroadcastsInsertCuepointSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeLiveBroadcastsInsertCuepointSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointRequest:
    query_params: YoutubeLiveBroadcastsInsertCuepointQueryParams = dataclasses.field()
    security: YoutubeLiveBroadcastsInsertCuepointSecurity = dataclasses.field()
    request: Optional[shared_cuepoint.Cuepoint] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsInsertCuepointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cuepoint: Optional[shared_cuepoint.Cuepoint] = dataclasses.field(default=None)
    
