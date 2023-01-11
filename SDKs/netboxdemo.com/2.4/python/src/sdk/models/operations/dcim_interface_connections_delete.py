import dataclasses



@dataclasses.dataclass
class DcimInterfaceConnectionsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfaceConnectionsDeleteRequest:
    path_params: DcimInterfaceConnectionsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfaceConnectionsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
