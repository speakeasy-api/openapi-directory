import dataclasses



@dataclasses.dataclass
class DcimPowerPortsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortsDeleteRequest:
    path_params: DcimPowerPortsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPortsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
