import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_external_campaign as shared_messaging_v1_external_campaign


CREATE_EXTERNAL_CAMPAIGN_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class CreateExternalCampaignCreateExternalCampaignRequest:
    campaign_id: str = dataclasses.field(metadata={'form': { 'field_name': 'CampaignId' }})
    messaging_service_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

@dataclasses.dataclass
class CreateExternalCampaignSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateExternalCampaignRequest:
    security: CreateExternalCampaignSecurity = dataclasses.field()
    request: Optional[CreateExternalCampaignCreateExternalCampaignRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateExternalCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_external_campaign: Optional[shared_messaging_v1_external_campaign.MessagingV1ExternalCampaign] = dataclasses.field(default=None)
    
