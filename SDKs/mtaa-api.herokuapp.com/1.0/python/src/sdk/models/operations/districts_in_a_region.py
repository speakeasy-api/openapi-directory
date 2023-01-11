import dataclasses



@dataclasses.dataclass
class DistrictsInARegionPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    region: str = dataclasses.field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DistrictsInARegionRequest:
    path_params: DistrictsInARegionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DistrictsInARegionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
