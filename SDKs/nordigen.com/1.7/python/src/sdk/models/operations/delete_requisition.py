import dataclasses



@dataclasses.dataclass
class DeleteRequisitionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRequisitionRequest:
    path_params: DeleteRequisitionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRequisitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
