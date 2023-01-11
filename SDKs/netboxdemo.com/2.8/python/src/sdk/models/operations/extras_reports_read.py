import dataclasses



@dataclasses.dataclass
class ExtrasReportsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasReportsReadRequest:
    path_params: ExtrasReportsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasReportsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
