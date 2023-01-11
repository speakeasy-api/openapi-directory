import dataclasses



@dataclasses.dataclass
class IpamVrfsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVrfsDeleteRequest:
    path_params: IpamVrfsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVrfsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
