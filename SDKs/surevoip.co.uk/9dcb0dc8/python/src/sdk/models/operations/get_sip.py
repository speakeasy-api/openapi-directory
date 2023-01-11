import dataclasses



@dataclasses.dataclass
class GetSipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
