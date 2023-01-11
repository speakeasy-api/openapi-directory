import dataclasses



@dataclasses.dataclass
class DeleteLegalEntityPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLegalEntityRequest:
    path_params: DeleteLegalEntityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLegalEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
