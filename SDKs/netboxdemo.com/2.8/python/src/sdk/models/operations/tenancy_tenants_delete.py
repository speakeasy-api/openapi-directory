import dataclasses



@dataclasses.dataclass
class TenancyTenantsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyTenantsDeleteRequest:
    path_params: TenancyTenantsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TenancyTenantsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
