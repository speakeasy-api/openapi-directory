import dataclasses



@dataclasses.dataclass
class DisablePathParams:
    disabled: bool = dataclasses.field(metadata={'path_param': { 'field_name': 'disabled', 'style': 'simple', 'explode': False }})
    source: str = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableRequest:
    path_params: DisablePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DisableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
