import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchinputmarketingeventemailsubscriber as shared_batchinputmarketingeventemailsubscriber
from ..shared import batchresponsesubscriberemailresponse as shared_batchresponsesubscriberemailresponse


@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailPathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailQueryParams:
    external_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailRequest:
    path_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailPathParams = dataclasses.field()
    query_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailQueryParams = dataclasses.field()
    request: shared_batchinputmarketingeventemailsubscriber.BatchInputMarketingEventEmailSubscriber = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_response_subscriber_email_response: Optional[shared_batchresponsesubscriberemailresponse.BatchResponseSubscriberEmailResponse] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
