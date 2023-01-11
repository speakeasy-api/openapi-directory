import dataclasses



@dataclasses.dataclass
class GetRandomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
