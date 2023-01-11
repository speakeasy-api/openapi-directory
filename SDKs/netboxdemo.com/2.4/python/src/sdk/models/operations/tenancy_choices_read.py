import dataclasses



@dataclasses.dataclass
class TenancyChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TenancyChoicesReadRequest:
    path_params: TenancyChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TenancyChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
