import dataclasses



@dataclasses.dataclass
class IpamRirsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamRirsDeleteRequest:
    path_params: IpamRirsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamRirsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
