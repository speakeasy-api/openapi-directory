import dataclasses



@dataclasses.dataclass
class IpamRolesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamRolesDeleteRequest:
    path_params: IpamRolesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamRolesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
