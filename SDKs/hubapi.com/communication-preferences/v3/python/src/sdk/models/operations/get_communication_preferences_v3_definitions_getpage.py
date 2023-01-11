import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import subscriptiondefinitionsresponse as shared_subscriptiondefinitionsresponse


@dataclasses.dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageRequest:
    security: GetCommunicationPreferencesV3DefinitionsGetPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    subscription_definitions_response: Optional[shared_subscriptiondefinitionsresponse.SubscriptionDefinitionsResponse] = dataclasses.field(default=None)
    
