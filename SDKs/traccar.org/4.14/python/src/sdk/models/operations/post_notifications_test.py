import dataclasses



@dataclasses.dataclass
class PostNotificationsTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
