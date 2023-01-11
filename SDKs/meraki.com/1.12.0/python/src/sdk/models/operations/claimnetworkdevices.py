import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ClaimNetworkDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ClaimNetworkDevicesRequestBody:
    serials: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    

@dataclasses.dataclass
class ClaimNetworkDevicesRequest:
    path_params: ClaimNetworkDevicesPathParams = dataclasses.field()
    request: ClaimNetworkDevicesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ClaimNetworkDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
