import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import collectionresponseexternalunifiedevent as shared_collectionresponseexternalunifiedevent


@dataclasses.dataclass
class GetEventsV3EventsGetPageQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventType', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    object_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectId', 'style': 'form', 'explode': True }})
    object_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    occurred_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurredAfter', 'style': 'form', 'explode': True }})
    occurred_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurredBefore', 'style': 'form', 'explode': True }})
    sort: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventsV3EventsGetPageSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventsV3EventsGetPageRequest:
    query_params: GetEventsV3EventsGetPageQueryParams = dataclasses.field()
    security: GetEventsV3EventsGetPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsV3EventsGetPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    collection_response_external_unified_event: Optional[shared_collectionresponseexternalunifiedevent.CollectionResponseExternalUnifiedEvent] = dataclasses.field(default=None)
    
