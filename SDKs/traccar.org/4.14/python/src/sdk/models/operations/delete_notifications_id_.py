import dataclasses



@dataclasses.dataclass
class DeleteNotificationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNotificationsIDRequest:
    path_params: DeleteNotificationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNotificationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
