import dataclasses
from ..shared import deviceaccumulators as shared_deviceaccumulators


@dataclasses.dataclass
class PutDevicesIDAccumulatorsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDevicesIDAccumulatorsRequest:
    path_params: PutDevicesIDAccumulatorsPathParams = dataclasses.field()
    request: shared_deviceaccumulators.DeviceAccumulators = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutDevicesIDAccumulatorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
