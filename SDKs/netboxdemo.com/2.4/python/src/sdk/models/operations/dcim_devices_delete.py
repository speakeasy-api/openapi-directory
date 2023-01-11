import dataclasses



@dataclasses.dataclass
class DcimDevicesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDevicesDeleteRequest:
    path_params: DcimDevicesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDevicesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
