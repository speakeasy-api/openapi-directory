import dataclasses



@dataclasses.dataclass
class DeleteDevicesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDevicesIDRequest:
    path_params: DeleteDevicesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDevicesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
