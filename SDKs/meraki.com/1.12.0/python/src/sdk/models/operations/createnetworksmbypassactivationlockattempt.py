import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSmBypassActivationLockAttemptPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSmBypassActivationLockAttemptRequestBody:
    ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclasses.dataclass
class CreateNetworkSmBypassActivationLockAttemptRequest:
    path_params: CreateNetworkSmBypassActivationLockAttemptPathParams = dataclasses.field()
    request: CreateNetworkSmBypassActivationLockAttemptRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSmBypassActivationLockAttemptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_sm_bypass_activation_lock_attempt_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
