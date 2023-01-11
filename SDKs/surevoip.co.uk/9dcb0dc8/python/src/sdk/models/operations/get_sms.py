import dataclasses



@dataclasses.dataclass
class GetSmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
