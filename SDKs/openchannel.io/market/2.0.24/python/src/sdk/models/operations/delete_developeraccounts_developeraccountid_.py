import dataclasses



@dataclasses.dataclass
class DeleteDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeveloperAccountsDeveloperAccountIDRequest:
    path_params: DeleteDeveloperAccountsDeveloperAccountIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
