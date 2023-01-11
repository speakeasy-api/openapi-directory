import dataclasses



@dataclasses.dataclass
class DeleteAppsAppIDVersionsVersionPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppsAppIDVersionsVersionQueryParams:
    developer_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAppsAppIDVersionsVersionRequest:
    path_params: DeleteAppsAppIDVersionsVersionPathParams = dataclasses.field()
    query_params: DeleteAppsAppIDVersionsVersionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAppsAppIDVersionsVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
