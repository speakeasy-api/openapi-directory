"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import networkendpoint as shared_networkendpoint
from ..shared import schedulingconfig as shared_schedulingconfig
from ..shared import symptom as shared_symptom
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class NodeAPIVersionEnum(str, Enum):
    r"""Output only. The API version that created this Node."""
    API_VERSION_UNSPECIFIED = 'API_VERSION_UNSPECIFIED'
    V1_ALPHA1 = 'V1_ALPHA1'
    V1 = 'V1'
    V2_ALPHA1 = 'V2_ALPHA1'

class NodeHealthEnum(str, Enum):
    r"""The health status of the TPU node."""
    HEALTH_UNSPECIFIED = 'HEALTH_UNSPECIFIED'
    HEALTHY = 'HEALTHY'
    DEPRECATED_UNHEALTHY = 'DEPRECATED_UNHEALTHY'
    TIMEOUT = 'TIMEOUT'
    UNHEALTHY_TENSORFLOW = 'UNHEALTHY_TENSORFLOW'
    UNHEALTHY_MAINTENANCE = 'UNHEALTHY_MAINTENANCE'

class NodeStateEnum(str, Enum):
    r"""Output only. The current state for the TPU Node."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    CREATING = 'CREATING'
    READY = 'READY'
    RESTARTING = 'RESTARTING'
    REIMAGING = 'REIMAGING'
    DELETING = 'DELETING'
    REPAIRING = 'REPAIRING'
    STOPPED = 'STOPPED'
    STOPPING = 'STOPPING'
    STARTING = 'STARTING'
    PREEMPTED = 'PREEMPTED'
    TERMINATED = 'TERMINATED'
    HIDING = 'HIDING'
    HIDDEN = 'HIDDEN'
    UNHIDING = 'UNHIDING'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Node:
    r"""A TPU instance."""
    
    accelerator_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('acceleratorType'), 'exclude': lambda f: f is None }})
    r"""Required. The type of hardware accelerators associated with this node."""  
    api_version: Optional[NodeAPIVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apiVersion'), 'exclude': lambda f: f is None }})
    r"""Output only. The API version that created this Node."""  
    cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cidrBlock'), 'exclude': lambda f: f is None }})
    r"""The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time when the node was created."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""The user-supplied description of the TPU. Maximum of 512 characters."""  
    health: Optional[NodeHealthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('health'), 'exclude': lambda f: f is None }})
    r"""The health status of the TPU node."""  
    health_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('healthDescription'), 'exclude': lambda f: f is None }})
    r"""Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy."""  
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ipAddress'), 'exclude': lambda f: f is None }})
    r"""Output only. DEPRECATED! Use network_endpoints instead. The network address for the TPU Node as visible to Compute Engine instances."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Resource labels to represent user-provided metadata."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Output only. Immutable. The name of the TPU"""  
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('network'), 'exclude': lambda f: f is None }})
    r"""The name of a network they wish to peer the TPU node to. It must be a preexisting Compute Engine network inside of the project on which this API has been activated. If none is provided, \\"default\\" will be used."""  
    network_endpoints: Optional[list[shared_networkendpoint.NetworkEndpoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networkEndpoints'), 'exclude': lambda f: f is None }})
    r"""Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that Tensorflow clients of the node reach out to the 0th entry in this map first."""  
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('port'), 'exclude': lambda f: f is None }})
    r"""Output only. DEPRECATED! Use network_endpoints instead. The network port for the TPU Node as visible to Compute Engine instances."""  
    scheduling_config: Optional[shared_schedulingconfig.SchedulingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schedulingConfig'), 'exclude': lambda f: f is None }})
    r"""Sets the scheduling options for this node."""  
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('serviceAccount'), 'exclude': lambda f: f is None }})
    r"""Output only. The service account used to run the tensor flow services within the node. To share resources, including Google Cloud Storage data, with the Tensorflow job running in the Node, this account must have permissions to that data."""  
    state: Optional[NodeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. The current state for the TPU Node."""  
    symptoms: Optional[list[shared_symptom.Symptom]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('symptoms'), 'exclude': lambda f: f is None }})
    r"""Output only. The Symptoms that have occurred to the TPU Node."""  
    tensorflow_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tensorflowVersion'), 'exclude': lambda f: f is None }})
    r"""Required. The version of Tensorflow running in the Node."""  
    use_service_networking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useServiceNetworking'), 'exclude': lambda f: f is None }})
    r"""Whether the VPC peering for the node is set up through Service Networking API. The VPC Peering should be set up before provisioning the node. If this field is set, cidr_block field should not be specified. If the network, that you want to peer the TPU Node to, is Shared VPC networks, the node must be created with this this field enabled."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NodeInput:
    r"""A TPU instance."""
    
    accelerator_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('acceleratorType'), 'exclude': lambda f: f is None }})
    r"""Required. The type of hardware accelerators associated with this node."""  
    cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cidrBlock'), 'exclude': lambda f: f is None }})
    r"""The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""The user-supplied description of the TPU. Maximum of 512 characters."""  
    health: Optional[NodeHealthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('health'), 'exclude': lambda f: f is None }})
    r"""The health status of the TPU node."""  
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ipAddress'), 'exclude': lambda f: f is None }})
    r"""Output only. DEPRECATED! Use network_endpoints instead. The network address for the TPU Node as visible to Compute Engine instances."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Resource labels to represent user-provided metadata."""  
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('network'), 'exclude': lambda f: f is None }})
    r"""The name of a network they wish to peer the TPU node to. It must be a preexisting Compute Engine network inside of the project on which this API has been activated. If none is provided, \\"default\\" will be used."""  
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('port'), 'exclude': lambda f: f is None }})
    r"""Output only. DEPRECATED! Use network_endpoints instead. The network port for the TPU Node as visible to Compute Engine instances."""  
    scheduling_config: Optional[shared_schedulingconfig.SchedulingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schedulingConfig'), 'exclude': lambda f: f is None }})
    r"""Sets the scheduling options for this node."""  
    tensorflow_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tensorflowVersion'), 'exclude': lambda f: f is None }})
    r"""Required. The version of Tensorflow running in the Node."""  
    use_service_networking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useServiceNetworking'), 'exclude': lambda f: f is None }})
    r"""Whether the VPC peering for the node is set up through Service Networking API. The VPC Peering should be set up before provisioning the node. If this field is set, cidr_block field should not be specified. If the network, that you want to peer the TPU Node to, is Shared VPC networks, the node must be created with this this field enabled."""  
    