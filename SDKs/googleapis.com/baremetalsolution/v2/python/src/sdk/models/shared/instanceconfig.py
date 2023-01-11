import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkaddress as shared_networkaddress
from ..shared import googlecloudbaremetalsolutionv2logicalinterface as shared_googlecloudbaremetalsolutionv2logicalinterface

class InstanceConfigNetworkConfigEnum(str, Enum):
    NETWORKCONFIG_UNSPECIFIED = "NETWORKCONFIG_UNSPECIFIED"
    SINGLE_VLAN = "SINGLE_VLAN"
    MULTI_VLAN = "MULTI_VLAN"


@dataclass_json
@dataclasses.dataclass
class InstanceConfigInput:
    r"""InstanceConfigInput
    Configuration parameters for a new instance.
    """
    
    account_networks_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNetworksEnabled') }})
    client_network: Optional[shared_networkaddress.NetworkAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNetwork') }})
    hyperthreading: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreading') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    network_config: Optional[InstanceConfigNetworkConfigEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    os_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    private_network: Optional[shared_networkaddress.NetworkAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    user_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    

@dataclass_json
@dataclasses.dataclass
class InstanceConfig:
    r"""InstanceConfig
    Configuration parameters for a new instance.
    """
    
    account_networks_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNetworksEnabled') }})
    client_network: Optional[shared_networkaddress.NetworkAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNetwork') }})
    hyperthreading: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreading') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[InstanceConfigNetworkConfigEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    os_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    private_network: Optional[shared_networkaddress.NetworkAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    user_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    
