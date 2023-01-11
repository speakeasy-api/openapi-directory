import dataclasses



@dataclasses.dataclass
class GetPortingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
