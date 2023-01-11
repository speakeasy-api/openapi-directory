import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import marketingeventcreaterequestparams as shared_marketingeventcreaterequestparams
from ..shared import marketingeventpublicdefaultresponse as shared_marketingeventpublicdefaultresponse


@dataclasses.dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceRequest:
    path_params: PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams = dataclasses.field()
    request: shared_marketingeventcreaterequestparams.MarketingEventCreateRequestParams = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    marketing_event_public_default_response: Optional[shared_marketingeventpublicdefaultresponse.MarketingEventPublicDefaultResponse] = dataclasses.field(default=None)
    
