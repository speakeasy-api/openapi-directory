import dataclasses



@dataclasses.dataclass
class DcimPowerPanelsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPanelsDeleteRequest:
    path_params: DcimPowerPanelsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPanelsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
