import dataclasses



@dataclasses.dataclass
class GetMobileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
