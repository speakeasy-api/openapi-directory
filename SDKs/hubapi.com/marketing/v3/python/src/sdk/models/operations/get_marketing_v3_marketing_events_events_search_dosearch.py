import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import collectionresponsemarketingeventexternaluniqueidentifiernopaging as shared_collectionresponsemarketingeventexternaluniqueidentifiernopaging


@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest:
    query_params: GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams = dataclasses.field()
    security: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    collection_response_marketing_event_external_unique_identifier_no_paging: Optional[shared_collectionresponsemarketingeventexternaluniqueidentifiernopaging.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging] = dataclasses.field(default=None)
    
