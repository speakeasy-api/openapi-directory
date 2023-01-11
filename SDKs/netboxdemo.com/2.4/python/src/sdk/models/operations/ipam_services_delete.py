import dataclasses



@dataclasses.dataclass
class IpamServicesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamServicesDeleteRequest:
    path_params: IpamServicesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamServicesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
