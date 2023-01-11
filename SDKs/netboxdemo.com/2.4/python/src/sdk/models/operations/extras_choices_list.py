import dataclasses



@dataclasses.dataclass
class ExtrasChoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
