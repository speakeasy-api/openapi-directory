import dataclasses
from typing import Optional
from ..shared import campaignwrapped as shared_campaignwrapped


@dataclasses.dataclass
class GetResourcesCampaignsJSONQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesCampaignsJSONRequest:
    query_params: GetResourcesCampaignsJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesCampaignsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign_wrapped: Optional[shared_campaignwrapped.CampaignWrapped] = dataclasses.field(default=None)
    
