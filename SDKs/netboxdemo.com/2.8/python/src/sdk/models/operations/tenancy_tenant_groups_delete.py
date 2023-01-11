import dataclasses



@dataclasses.dataclass
class TenancyTenantGroupsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyTenantGroupsDeleteRequest:
    path_params: TenancyTenantGroupsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TenancyTenantGroupsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
