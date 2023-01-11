import dataclasses



@dataclasses.dataclass
class GetTestPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
