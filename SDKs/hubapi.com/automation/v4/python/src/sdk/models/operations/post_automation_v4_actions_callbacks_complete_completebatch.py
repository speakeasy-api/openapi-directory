import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import batchinputcallbackcompletionbatchrequest as shared_batchinputcallbackcompletionbatchrequest


@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest:
    request: shared_batchinputcallbackcompletionbatchrequest.BatchInputCallbackCompletionBatchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
