import dataclasses



@dataclasses.dataclass
class DeleteCalendarsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCalendarsIDRequest:
    path_params: DeleteCalendarsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCalendarsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
