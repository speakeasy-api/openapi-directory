import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import marketingeventpublicreadresponse as shared_marketingeventpublicreadresponse


@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams:
    external_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest:
    path_params: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams = dataclasses.field()
    query_params: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams = dataclasses.field()
    security: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    marketing_event_public_read_response: Optional[shared_marketingeventpublicreadresponse.MarketingEventPublicReadResponse] = dataclasses.field(default=None)
    
