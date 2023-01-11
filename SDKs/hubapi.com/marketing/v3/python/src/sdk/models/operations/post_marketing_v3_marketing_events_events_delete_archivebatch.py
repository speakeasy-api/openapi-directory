import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchinputmarketingeventexternaluniqueidentifier as shared_batchinputmarketingeventexternaluniqueidentifier


@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest:
    request: shared_batchinputmarketingeventexternaluniqueidentifier.BatchInputMarketingEventExternalUniqueIdentifier = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
