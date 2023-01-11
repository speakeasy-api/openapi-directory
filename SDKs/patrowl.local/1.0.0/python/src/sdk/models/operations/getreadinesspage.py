import dataclasses



@dataclasses.dataclass
class GetReadinessPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
