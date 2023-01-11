import dataclasses



@dataclasses.dataclass
class DcimVirtualChassisDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimVirtualChassisDeleteRequest:
    path_params: DcimVirtualChassisDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimVirtualChassisDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
