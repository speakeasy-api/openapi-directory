import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import marketingeventcreaterequestparams as shared_marketingeventcreaterequestparams
from ..shared import marketingeventdefaultresponse as shared_marketingeventdefaultresponse


@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsCreateSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsCreateRequest:
    request: shared_marketingeventcreaterequestparams.MarketingEventCreateRequestParams = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    marketing_event_default_response: Optional[shared_marketingeventdefaultresponse.MarketingEventDefaultResponse] = dataclasses.field(default=None)
    
