import dataclasses



@dataclasses.dataclass
class GetDepPathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDepRequest:
    path_params: GetDepPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDepResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
