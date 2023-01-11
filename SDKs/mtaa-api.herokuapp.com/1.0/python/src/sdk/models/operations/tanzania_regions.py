import dataclasses



@dataclasses.dataclass
class TanzaniaRegionsPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TanzaniaRegionsRequest:
    path_params: TanzaniaRegionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TanzaniaRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
