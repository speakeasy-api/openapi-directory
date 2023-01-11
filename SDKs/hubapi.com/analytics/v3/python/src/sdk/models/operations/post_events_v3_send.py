import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import behavioraleventhttpcompletionrequest as shared_behavioraleventhttpcompletionrequest


@dataclasses.dataclass
class PostEventsV3SendSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostEventsV3SendRequest:
    request: shared_behavioraleventhttpcompletionrequest.BehavioralEventHTTPCompletionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostEventsV3SendSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostEventsV3SendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
