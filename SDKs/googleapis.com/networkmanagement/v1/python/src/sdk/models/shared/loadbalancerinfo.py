import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancerbackend as shared_loadbalancerbackend

class LoadBalancerInfoBackendTypeEnum(str, Enum):
    BACKEND_TYPE_UNSPECIFIED = "BACKEND_TYPE_UNSPECIFIED"
    BACKEND_SERVICE = "BACKEND_SERVICE"
    TARGET_POOL = "TARGET_POOL"
    TARGET_INSTANCE = "TARGET_INSTANCE"

class LoadBalancerInfoLoadBalancerTypeEnum(str, Enum):
    LOAD_BALANCER_TYPE_UNSPECIFIED = "LOAD_BALANCER_TYPE_UNSPECIFIED"
    INTERNAL_TCP_UDP = "INTERNAL_TCP_UDP"
    NETWORK_TCP_UDP = "NETWORK_TCP_UDP"
    HTTP_PROXY = "HTTP_PROXY"
    TCP_PROXY = "TCP_PROXY"
    SSL_PROXY = "SSL_PROXY"


@dataclass_json
@dataclasses.dataclass
class LoadBalancerInfo:
    r"""LoadBalancerInfo
    For display only. Metadata associated with a load balancer.
    """
    
    backend_type: Optional[LoadBalancerInfoBackendTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendType') }})
    backend_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendUri') }})
    backends: Optional[list[shared_loadbalancerbackend.LoadBalancerBackend]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    health_check_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckUri') }})
    load_balancer_type: Optional[LoadBalancerInfoLoadBalancerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerType') }})
    
