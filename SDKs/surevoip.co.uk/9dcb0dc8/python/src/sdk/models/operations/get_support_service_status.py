import dataclasses



@dataclasses.dataclass
class GetSupportServiceStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
