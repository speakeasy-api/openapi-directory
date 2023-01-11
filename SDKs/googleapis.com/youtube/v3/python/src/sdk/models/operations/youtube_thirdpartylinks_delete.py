import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum

class YoutubeThirdPartyLinksDeleteTypeEnum(str, Enum):
    LINK_UNSPECIFIED = "linkUnspecified"
    CHANNEL_TO_STORE_LINK = "channelToStoreLink"


@dataclasses.dataclass
class YoutubeThirdPartyLinksDeleteQueryParams:
    linking_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'linkingToken', 'style': 'form', 'explode': True }})
    type: YoutubeThirdPartyLinksDeleteTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    external_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'externalChannelId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    part: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class YoutubeThirdPartyLinksDeleteRequest:
    query_params: YoutubeThirdPartyLinksDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class YoutubeThirdPartyLinksDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
