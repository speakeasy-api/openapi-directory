import dataclasses



@dataclasses.dataclass
class GetAemetStationPathParams:
    period: str = dataclasses.field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    station_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAemetStationRequest:
    path_params: GetAemetStationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAemetStationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
