import dataclasses



@dataclasses.dataclass
class ExtrasScriptsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasScriptsReadRequest:
    path_params: ExtrasScriptsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasScriptsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
