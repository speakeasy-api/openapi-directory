import dataclasses



@dataclasses.dataclass
class GetEchoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
