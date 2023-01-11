import dataclasses



@dataclasses.dataclass
class DcimRackReservationsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackReservationsDeleteRequest:
    path_params: DcimRackReservationsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackReservationsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
