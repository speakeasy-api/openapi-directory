import dataclasses



@dataclasses.dataclass
class GetOntologyTermSubsetsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOntologyTermSubsetsRequest:
    path_params: GetOntologyTermSubsetsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntologyTermSubsetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
