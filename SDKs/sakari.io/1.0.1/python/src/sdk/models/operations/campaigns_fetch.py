import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaignresponse as shared_campaignresponse


@dataclasses.dataclass
class CampaignsFetchPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CampaignsFetchSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CampaignsFetchRequest:
    path_params: CampaignsFetchPathParams = dataclasses.field()
    security: CampaignsFetchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CampaignsFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign_response: Optional[shared_campaignresponse.CampaignResponse] = dataclasses.field(default=None)
    
