import dataclasses



@dataclasses.dataclass
class DcimPowerOutletsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerOutletsDeleteRequest:
    path_params: DcimPowerOutletsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerOutletsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
