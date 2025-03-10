"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import campaignrequest as shared_campaignrequest
from ..shared import campaignresponse as shared_campaignresponse
from typing import Optional


@dataclasses.dataclass
class CampaignsCreateSecurity:
    
    sakari_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class CampaignsCreateRequest:
    
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    r"""Account to apply operations to"""  
    campaign_request: Optional[shared_campaignrequest.CampaignRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class CampaignsCreateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    campaign_response: Optional[shared_campaignresponse.CampaignResponse] = dataclasses.field(default=None)
    r"""successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    