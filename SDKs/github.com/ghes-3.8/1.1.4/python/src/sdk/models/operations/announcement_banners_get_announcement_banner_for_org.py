"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import announcement_banner as shared_announcement_banner
from typing import Optional


@dataclasses.dataclass
class AnnouncementBannersGetAnnouncementBannerForOrgRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    r"""The organization name. The name is not case sensitive."""  
    

@dataclasses.dataclass
class AnnouncementBannersGetAnnouncementBannerForOrgResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    announcement_banner: Optional[shared_announcement_banner.AnnouncementBanner] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    