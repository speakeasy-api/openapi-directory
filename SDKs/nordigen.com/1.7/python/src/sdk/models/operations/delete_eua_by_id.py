import dataclasses



@dataclasses.dataclass
class DeleteEuaByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEuaByIDRequest:
    path_params: DeleteEuaByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEuaByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
