import dataclasses



@dataclasses.dataclass
class DcimPowerOutletTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesDeleteRequest:
    path_params: DcimPowerOutletTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerOutletTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
