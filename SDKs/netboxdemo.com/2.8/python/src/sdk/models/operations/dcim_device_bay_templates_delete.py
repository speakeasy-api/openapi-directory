import dataclasses



@dataclasses.dataclass
class DcimDeviceBayTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesDeleteRequest:
    path_params: DcimDeviceBayTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimDeviceBayTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
