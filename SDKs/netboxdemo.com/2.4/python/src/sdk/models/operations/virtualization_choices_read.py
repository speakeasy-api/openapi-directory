import dataclasses



@dataclasses.dataclass
class VirtualizationChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationChoicesReadRequest:
    path_params: VirtualizationChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
