import dataclasses



@dataclasses.dataclass
class TenancyChoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
