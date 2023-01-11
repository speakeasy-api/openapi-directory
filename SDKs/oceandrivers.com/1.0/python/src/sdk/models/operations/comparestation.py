import dataclasses



@dataclasses.dataclass
class CompareStationPathParams:
    station_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompareStationRequest:
    path_params: CompareStationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompareStationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
