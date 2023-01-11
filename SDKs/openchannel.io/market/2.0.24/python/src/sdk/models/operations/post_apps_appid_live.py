import dataclasses



@dataclasses.dataclass
class PostAppsAppIDLivePathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsAppIDLiveQueryParams:
    developer_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAppsAppIDLiveRequest:
    path_params: PostAppsAppIDLivePathParams = dataclasses.field()
    query_params: PostAppsAppIDLiveQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAppsAppIDLiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
