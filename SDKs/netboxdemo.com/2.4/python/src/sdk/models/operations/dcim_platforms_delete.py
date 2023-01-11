import dataclasses



@dataclasses.dataclass
class DcimPlatformsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPlatformsDeleteRequest:
    path_params: DcimPlatformsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPlatformsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
