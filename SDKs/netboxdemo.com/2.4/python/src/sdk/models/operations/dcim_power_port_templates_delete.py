import dataclasses



@dataclasses.dataclass
class DcimPowerPortTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerPortTemplatesDeleteRequest:
    path_params: DcimPowerPortTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerPortTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
