import dataclasses



@dataclasses.dataclass
class BaseReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
