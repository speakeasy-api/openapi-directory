import dataclasses



@dataclasses.dataclass
class DcimRackGroupsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackGroupsDeleteRequest:
    path_params: DcimRackGroupsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackGroupsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
