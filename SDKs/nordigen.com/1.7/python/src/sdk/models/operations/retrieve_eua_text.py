import dataclasses



@dataclasses.dataclass
class RetrieveEuaTextPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveEuaTextRequest:
    path_params: RetrieveEuaTextPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveEuaTextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
