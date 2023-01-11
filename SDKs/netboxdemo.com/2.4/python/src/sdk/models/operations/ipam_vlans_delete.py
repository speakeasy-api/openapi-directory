import dataclasses



@dataclasses.dataclass
class IpamVlansDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVlansDeleteRequest:
    path_params: IpamVlansDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVlansDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
