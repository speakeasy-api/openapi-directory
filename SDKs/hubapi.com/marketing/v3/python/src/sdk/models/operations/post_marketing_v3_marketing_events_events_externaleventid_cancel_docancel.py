import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import marketingeventdefaultresponse as shared_marketingeventdefaultresponse


@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelPathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelQueryParams:
    external_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelPathParams = dataclasses.field()
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelQueryParams = dataclasses.field()
    security: PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    marketing_event_default_response: Optional[shared_marketingeventdefaultresponse.MarketingEventDefaultResponse] = dataclasses.field(default=None)
    
