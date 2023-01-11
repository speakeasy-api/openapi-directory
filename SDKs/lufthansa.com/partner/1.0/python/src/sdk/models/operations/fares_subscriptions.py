import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class FaresSubscriptionsQueryParams:
    cabin_class: str = dataclasses.field(metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    destination: str = dataclasses.field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    lang: str = dataclasses.field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    trip_duration: str = dataclasses.field(metadata={'query_param': { 'field_name': 'trip-duration', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    trackingid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FaresSubscriptionsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FaresSubscriptionsSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FaresSubscriptionsRequest:
    headers: FaresSubscriptionsHeaders = dataclasses.field()
    query_params: FaresSubscriptionsQueryParams = dataclasses.field()
    security: FaresSubscriptionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FaresSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fares_subscriptions_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
