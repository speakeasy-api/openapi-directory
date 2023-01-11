import dataclasses



@dataclasses.dataclass
class RetrieveAccountDetailsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveAccountDetailsRequest:
    path_params: RetrieveAccountDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAccountDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
