import dataclasses



@dataclasses.dataclass
class ExtrasCustomFieldChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasCustomFieldChoicesReadRequest:
    path_params: ExtrasCustomFieldChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasCustomFieldChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
