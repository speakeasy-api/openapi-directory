import dataclasses



@dataclasses.dataclass
class PingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
