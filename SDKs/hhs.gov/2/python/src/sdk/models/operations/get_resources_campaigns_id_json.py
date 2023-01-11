import dataclasses
from typing import Optional
from ..shared import campaignwrapped as shared_campaignwrapped


@dataclasses.dataclass
class GetResourcesCampaignsIDJSONPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesCampaignsIDJSONRequest:
    path_params: GetResourcesCampaignsIDJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesCampaignsIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign_wrapped: Optional[shared_campaignwrapped.CampaignWrapped] = dataclasses.field(default=None)
    
