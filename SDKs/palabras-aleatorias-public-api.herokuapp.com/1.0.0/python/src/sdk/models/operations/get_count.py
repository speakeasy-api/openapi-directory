import dataclasses



@dataclasses.dataclass
class GetCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
