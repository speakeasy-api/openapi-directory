import dataclasses



@dataclasses.dataclass
class GetTopupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
