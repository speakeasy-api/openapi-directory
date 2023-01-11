import dataclasses



@dataclasses.dataclass
class DeleteAppsAppIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppsAppIDQueryParams:
    developer_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAppsAppIDRequest:
    path_params: DeleteAppsAppIDPathParams = dataclasses.field()
    query_params: DeleteAppsAppIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAppsAppIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
