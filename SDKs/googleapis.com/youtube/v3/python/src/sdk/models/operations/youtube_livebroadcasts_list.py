import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import livebroadcastlistresponse as shared_livebroadcastlistresponse

class YoutubeLiveBroadcastsListBroadcastStatusEnum(str, Enum):
    BROADCAST_STATUS_FILTER_UNSPECIFIED = "broadcastStatusFilterUnspecified"
    ALL = "all"
    ACTIVE = "active"
    UPCOMING = "upcoming"
    COMPLETED = "completed"

class YoutubeLiveBroadcastsListBroadcastTypeEnum(str, Enum):
    BROADCAST_TYPE_FILTER_UNSPECIFIED = "broadcastTypeFilterUnspecified"
    ALL = "all"
    EVENT = "event"
    PERSISTENT = "persistent"


@dataclasses.dataclass
class YoutubeLiveBroadcastsListQueryParams:
    part: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    broadcast_status: Optional[YoutubeLiveBroadcastsListBroadcastStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'broadcastStatus', 'style': 'form', 'explode': True }})
    broadcast_type: Optional[YoutubeLiveBroadcastsListBroadcastTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'broadcastType', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    mine: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mine', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwnerChannel', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsListSecurity:
    option1: Optional[YoutubeLiveBroadcastsListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeLiveBroadcastsListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeLiveBroadcastsListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsListRequest:
    query_params: YoutubeLiveBroadcastsListQueryParams = dataclasses.field()
    security: YoutubeLiveBroadcastsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class YoutubeLiveBroadcastsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    live_broadcast_list_response: Optional[shared_livebroadcastlistresponse.LiveBroadcastListResponse] = dataclasses.field(default=None)
    
