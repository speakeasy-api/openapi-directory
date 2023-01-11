import dataclasses



@dataclasses.dataclass
class IpamVlanGroupsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamVlanGroupsDeleteRequest:
    path_params: IpamVlanGroupsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVlanGroupsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
