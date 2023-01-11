import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaignrequest as shared_campaignrequest
from ..shared import campaignresponse as shared_campaignresponse


@dataclasses.dataclass
class CampaignsCreatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CampaignsCreateSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CampaignsCreateRequest:
    path_params: CampaignsCreatePathParams = dataclasses.field()
    security: CampaignsCreateSecurity = dataclasses.field()
    request: Optional[shared_campaignrequest.CampaignRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CampaignsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign_response: Optional[shared_campaignresponse.CampaignResponse] = dataclasses.field(default=None)
    
