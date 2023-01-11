import dataclasses
from typing import Any,Optional
from ..shared import networkunblock as shared_networkunblock
from ..shared import errorthrottled as shared_errorthrottled
from ..shared import networkunblockresponseforbidden as shared_networkunblockresponseforbidden
from ..shared import networkunblockresponsenotfound as shared_networkunblockresponsenotfound
from ..shared import networkunblockresponseok as shared_networkunblockresponseok
from ..shared import networkunblockresponseunprocessablenetwork as shared_networkunblockresponseunprocessablenetwork
from ..shared import networkunblockresponseinvalidduration as shared_networkunblockresponseinvalidduration


@dataclasses.dataclass
class NetworkUnblockRequest:
    request: shared_networkunblock.NetworkUnblock = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NetworkUnblockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_throttled: Optional[shared_errorthrottled.ErrorThrottled] = dataclasses.field(default=None)
    network_unblock_response_forbidden: Optional[shared_networkunblockresponseforbidden.NetworkUnblockResponseForbidden] = dataclasses.field(default=None)
    network_unblock_response_not_found: Optional[shared_networkunblockresponsenotfound.NetworkUnblockResponseNotFound] = dataclasses.field(default=None)
    network_unblock_response_ok: Optional[shared_networkunblockresponseok.NetworkUnblockResponseOk] = dataclasses.field(default=None)
    network_unblock_422_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
