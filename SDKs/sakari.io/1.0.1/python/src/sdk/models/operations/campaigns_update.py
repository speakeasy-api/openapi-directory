import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaignresponse as shared_campaignresponse


@dataclasses.dataclass
class CampaignsUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CampaignsUpdateSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CampaignsUpdateRequest:
    path_params: CampaignsUpdatePathParams = dataclasses.field()
    security: CampaignsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CampaignsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign_response: Optional[shared_campaignresponse.CampaignResponse] = dataclasses.field(default=None)
    
