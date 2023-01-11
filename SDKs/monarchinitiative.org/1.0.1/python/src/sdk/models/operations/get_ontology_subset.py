import dataclasses



@dataclasses.dataclass
class GetOntologySubsetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOntologySubsetRequest:
    path_params: GetOntologySubsetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntologySubsetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
