import dataclasses



@dataclasses.dataclass
class DeletePermissionAppsAppIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePermissionAppsAppIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeletePermissionAppsAppIDRequest:
    path_params: DeletePermissionAppsAppIDPathParams = dataclasses.field()
    query_params: DeletePermissionAppsAppIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePermissionAppsAppIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
