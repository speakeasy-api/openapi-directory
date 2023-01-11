import dataclasses



@dataclasses.dataclass
class GetWeatherDisplayPathParams:
    station_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWeatherDisplayQueryParams:
    period: str = dataclasses.field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWeatherDisplayRequest:
    path_params: GetWeatherDisplayPathParams = dataclasses.field()
    query_params: GetWeatherDisplayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWeatherDisplayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
