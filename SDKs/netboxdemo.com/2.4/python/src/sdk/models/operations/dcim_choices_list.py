import dataclasses



@dataclasses.dataclass
class DcimChoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
