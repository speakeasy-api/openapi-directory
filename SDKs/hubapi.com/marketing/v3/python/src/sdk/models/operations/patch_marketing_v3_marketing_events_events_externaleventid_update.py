import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import marketingeventupdaterequestparams as shared_marketingeventupdaterequestparams
from ..shared import marketingeventpublicdefaultresponse as shared_marketingeventpublicdefaultresponse


@dataclasses.dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams:
    external_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateRequest:
    path_params: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams = dataclasses.field()
    query_params: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams = dataclasses.field()
    request: shared_marketingeventupdaterequestparams.MarketingEventUpdateRequestParams = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    marketing_event_public_default_response: Optional[shared_marketingeventpublicdefaultresponse.MarketingEventPublicDefaultResponse] = dataclasses.field(default=None)
    
