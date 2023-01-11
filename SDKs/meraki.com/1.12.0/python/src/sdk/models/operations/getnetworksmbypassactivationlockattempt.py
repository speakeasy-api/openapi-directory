import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmBypassActivationLockAttemptPathParams:
    attempt_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attemptId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmBypassActivationLockAttemptRequest:
    path_params: GetNetworkSmBypassActivationLockAttemptPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmBypassActivationLockAttemptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_bypass_activation_lock_attempt_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
