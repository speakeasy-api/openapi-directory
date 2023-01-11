import dataclasses



@dataclasses.dataclass
class GetEventStationsPathParams:
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventStationsRequest:
    path_params: GetEventStationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventStationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
