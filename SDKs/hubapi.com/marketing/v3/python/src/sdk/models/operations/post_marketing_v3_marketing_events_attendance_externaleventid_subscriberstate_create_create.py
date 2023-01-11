import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchinputmarketingeventsubscriber as shared_batchinputmarketingeventsubscriber
from ..shared import batchresponsesubscribervidresponse as shared_batchresponsesubscribervidresponse


@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams:
    external_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest:
    path_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams = dataclasses.field()
    query_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams = dataclasses.field()
    request: shared_batchinputmarketingeventsubscriber.BatchInputMarketingEventSubscriber = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_response_subscriber_vid_response: Optional[shared_batchresponsesubscribervidresponse.BatchResponseSubscriberVidResponse] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
