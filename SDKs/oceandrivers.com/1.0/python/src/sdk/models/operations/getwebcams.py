import dataclasses



@dataclasses.dataclass
class GetWebCamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
