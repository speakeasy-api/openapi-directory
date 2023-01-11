import dataclasses



@dataclasses.dataclass
class DeleteDriversIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDriversIDRequest:
    path_params: DeleteDriversIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDriversIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
