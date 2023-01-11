import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchinputmarketingeventcreaterequestparams as shared_batchinputmarketingeventcreaterequestparams
from ..shared import batchresponsemarketingeventpublicdefaultresponse as shared_batchresponsemarketingeventpublicdefaultresponse


@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest:
    request: shared_batchinputmarketingeventcreaterequestparams.BatchInputMarketingEventCreateRequestParams = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_response_marketing_event_public_default_response: Optional[shared_batchresponsemarketingeventpublicdefaultresponse.BatchResponseMarketingEventPublicDefaultResponse] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
