import dataclasses



@dataclasses.dataclass
class DeleteGeofencesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGeofencesIDRequest:
    path_params: DeleteGeofencesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGeofencesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
