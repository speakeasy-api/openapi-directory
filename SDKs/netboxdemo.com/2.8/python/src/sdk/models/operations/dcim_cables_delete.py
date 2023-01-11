import dataclasses



@dataclasses.dataclass
class DcimCablesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimCablesDeleteRequest:
    path_params: DcimCablesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimCablesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
