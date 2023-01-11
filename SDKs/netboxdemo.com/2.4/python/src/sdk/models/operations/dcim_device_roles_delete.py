import dataclasses



@dataclasses.dataclass
class DcimDeviceRolesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceRolesDeleteRequest:
    path_params: DcimDeviceRolesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceRolesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
