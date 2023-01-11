import dataclasses



@dataclasses.dataclass
class GetSocibWeatherStationPathParams:
    period: str = dataclasses.field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    station_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSocibWeatherStationRequest:
    path_params: GetSocibWeatherStationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSocibWeatherStationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
