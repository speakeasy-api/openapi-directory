import dataclasses



@dataclasses.dataclass
class DcimRearPortsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRearPortsDeleteRequest:
    path_params: DcimRearPortsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRearPortsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
