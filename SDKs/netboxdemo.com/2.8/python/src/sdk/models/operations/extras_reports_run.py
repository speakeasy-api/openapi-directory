import dataclasses



@dataclasses.dataclass
class ExtrasReportsRunPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasReportsRunRequest:
    path_params: ExtrasReportsRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasReportsRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
