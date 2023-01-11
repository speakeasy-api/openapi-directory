import dataclasses



@dataclasses.dataclass
class DcimRackRolesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackRolesDeleteRequest:
    path_params: DcimRackRolesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackRolesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
