import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchinputmarketingeventemailsubscriber as shared_batchinputmarketingeventemailsubscriber


@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDPathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDQueryParams:
    external_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDPathParams = dataclasses.field()
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDQueryParams = dataclasses.field()
    request: shared_batchinputmarketingeventemailsubscriber.BatchInputMarketingEventEmailSubscriber = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
