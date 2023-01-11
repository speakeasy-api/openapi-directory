import dataclasses



@dataclasses.dataclass
class DeleteDevelopersDeveloperIDPathParams:
    developer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDevelopersDeveloperIDRequest:
    path_params: DeleteDevelopersDeveloperIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDevelopersDeveloperIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
