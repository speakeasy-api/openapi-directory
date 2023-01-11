import dataclasses



@dataclasses.dataclass
class DcimRacksDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRacksDeleteRequest:
    path_params: DcimRacksDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRacksDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
