import dataclasses



@dataclasses.dataclass
class DcimInterfaceTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfaceTemplatesDeleteRequest:
    path_params: DcimInterfaceTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfaceTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
