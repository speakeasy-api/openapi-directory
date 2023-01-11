import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import execaction as shared_execaction
from ..shared import grpcaction as shared_grpcaction
from ..shared import httpgetaction as shared_httpgetaction
from ..shared import tcpsocketaction as shared_tcpsocketaction


@dataclass_json
@dataclasses.dataclass
class Probe:
    r"""Probe
    Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
    """
    
    exec: Optional[shared_execaction.ExecAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exec') }})
    failure_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThreshold') }})
    grpc: Optional[shared_grpcaction.GrpcAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http_get: Optional[shared_httpgetaction.HTTPGetAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpGet') }})
    initial_delay_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialDelaySeconds') }})
    period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodSeconds') }})
    success_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successThreshold') }})
    tcp_socket: Optional[shared_tcpsocketaction.TCPSocketAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpSocket') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    
