import dataclasses



@dataclasses.dataclass
class ExtrasReportsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
