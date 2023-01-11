import dataclasses



@dataclasses.dataclass
class DcimRegionsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRegionsDeleteRequest:
    path_params: DcimRegionsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRegionsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
