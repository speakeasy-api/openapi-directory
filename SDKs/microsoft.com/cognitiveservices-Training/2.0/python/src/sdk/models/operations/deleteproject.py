import dataclasses



@dataclasses.dataclass
class DeleteProjectPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectRequest:
    headers: DeleteProjectHeaders = dataclasses.field()
    path_params: DeleteProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
