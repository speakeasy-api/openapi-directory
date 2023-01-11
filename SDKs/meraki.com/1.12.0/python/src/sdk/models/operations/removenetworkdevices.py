import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RemoveNetworkDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveNetworkDevicesRequestBody:
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclasses.dataclass
class RemoveNetworkDevicesRequest:
    path_params: RemoveNetworkDevicesPathParams = dataclasses.field()
    request: RemoveNetworkDevicesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveNetworkDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
