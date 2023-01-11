import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum

class PagespeedonlinePagespeedapiRunpagespeedStrategyEnum(str, Enum):
    DESKTOP = "desktop"
    MOBILE = "mobile"


@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter_third_party_resources: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_third_party_resources', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    rule: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rule', 'style': 'form', 'explode': True }})
    screenshot: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'screenshot', 'style': 'form', 'explode': True }})
    snapshots: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'snapshots', 'style': 'form', 'explode': True }})
    strategy: Optional[PagespeedonlinePagespeedapiRunpagespeedStrategyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'strategy', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    utm_campaign: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'utm_campaign', 'style': 'form', 'explode': True }})
    utm_source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'utm_source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedRequest:
    query_params: PagespeedonlinePagespeedapiRunpagespeedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PagespeedonlinePagespeedapiRunpagespeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
