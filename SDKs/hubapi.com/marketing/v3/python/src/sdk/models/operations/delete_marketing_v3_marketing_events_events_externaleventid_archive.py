import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams:
    external_event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams:
    external_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity:
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest:
    path_params: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams = dataclasses.field()
    query_params: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams = dataclasses.field()
    security: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
