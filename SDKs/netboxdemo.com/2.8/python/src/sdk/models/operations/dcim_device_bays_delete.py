import dataclasses



@dataclasses.dataclass
class DcimDeviceBaysDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceBaysDeleteRequest:
    path_params: DcimDeviceBaysDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceBaysDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
