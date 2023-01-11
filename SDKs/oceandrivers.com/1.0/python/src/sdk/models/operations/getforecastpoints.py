import dataclasses



@dataclasses.dataclass
class GetForecastPointsPathParams:
    language: str = dataclasses.field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    yatchclubid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'yatchclubid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetForecastPointsRequest:
    path_params: GetForecastPointsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetForecastPointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
