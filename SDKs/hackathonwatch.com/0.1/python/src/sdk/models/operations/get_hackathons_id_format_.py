import dataclasses



@dataclasses.dataclass
class GetHackathonsIDFormatPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHackathonsIDFormatRequest:
    path_params: GetHackathonsIDFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHackathonsIDFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
