import dataclasses



@dataclasses.dataclass
class IpamPrefixesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesDeleteRequest:
    path_params: IpamPrefixesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamPrefixesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
