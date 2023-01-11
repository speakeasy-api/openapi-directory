import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import callbackcompletionrequest as shared_callbackcompletionrequest


@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams:
    callback_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callbackId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest:
    path_params: PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams = dataclasses.field()
    request: shared_callbackcompletionrequest.CallbackCompletionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
