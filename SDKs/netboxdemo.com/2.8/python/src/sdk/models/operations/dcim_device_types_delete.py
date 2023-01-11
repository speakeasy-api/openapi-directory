import dataclasses



@dataclasses.dataclass
class DcimDeviceTypesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceTypesDeleteRequest:
    path_params: DcimDeviceTypesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceTypesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
