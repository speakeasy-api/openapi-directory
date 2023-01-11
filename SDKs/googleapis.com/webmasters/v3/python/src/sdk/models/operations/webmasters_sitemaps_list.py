import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import sitemapslistresponse as shared_sitemapslistresponse


@dataclasses.dataclass
class WebmastersSitemapsListPathParams:
    site_url: str = dataclasses.field(metadata={'path_param': { 'field_name': 'siteUrl', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebmastersSitemapsListQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sitemap_index: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sitemapIndex', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WebmastersSitemapsListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebmastersSitemapsListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebmastersSitemapsListSecurity:
    option1: Optional[WebmastersSitemapsListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[WebmastersSitemapsListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class WebmastersSitemapsListRequest:
    path_params: WebmastersSitemapsListPathParams = dataclasses.field()
    query_params: WebmastersSitemapsListQueryParams = dataclasses.field()
    security: WebmastersSitemapsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebmastersSitemapsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sitemaps_list_response: Optional[shared_sitemapslistresponse.SitemapsListResponse] = dataclasses.field(default=None)
    
