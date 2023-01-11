import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkApplianceVlanPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkApplianceVlanRequestBody:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    appliance_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceIp') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclasses.dataclass
class CreateNetworkApplianceVlanRequest:
    path_params: CreateNetworkApplianceVlanPathParams = dataclasses.field()
    request: CreateNetworkApplianceVlanRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkApplianceVlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_appliance_vlan_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
