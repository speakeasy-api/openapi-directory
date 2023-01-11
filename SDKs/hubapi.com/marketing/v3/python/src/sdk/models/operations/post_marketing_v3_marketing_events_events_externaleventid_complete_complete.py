import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import marketingeventcompleterequestparams as shared_marketingeventcompleterequestparams
from ..shared import marketingeventdefaultresponse as shared_marketingeventdefaultresponse


@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompletePathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteQueryParams:
    external_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompletePathParams = dataclasses.field()
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteQueryParams = dataclasses.field()
    request: shared_marketingeventcompleterequestparams.MarketingEventCompleteRequestParams = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    marketing_event_default_response: Optional[shared_marketingeventdefaultresponse.MarketingEventDefaultResponse] = dataclasses.field(default=None)
    
