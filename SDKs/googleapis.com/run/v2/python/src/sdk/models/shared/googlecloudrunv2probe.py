import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2grpcaction as shared_googlecloudrunv2grpcaction
from ..shared import googlecloudrunv2httpgetaction as shared_googlecloudrunv2httpgetaction
from ..shared import googlecloudrunv2tcpsocketaction as shared_googlecloudrunv2tcpsocketaction


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2Probe:
    r"""GoogleCloudRunV2Probe
    Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
    """
    
    failure_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThreshold') }})
    grpc: Optional[shared_googlecloudrunv2grpcaction.GoogleCloudRunV2GrpcAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http_get: Optional[shared_googlecloudrunv2httpgetaction.GoogleCloudRunV2HTTPGetAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpGet') }})
    initial_delay_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialDelaySeconds') }})
    period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodSeconds') }})
    tcp_socket: Optional[shared_googlecloudrunv2tcpsocketaction.GoogleCloudRunV2TCPSocketAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpSocket') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    
