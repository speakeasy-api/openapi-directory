import dataclasses



@dataclasses.dataclass
class IpamIPAddressesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamIPAddressesDeleteRequest:
    path_params: IpamIPAddressesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamIPAddressesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
