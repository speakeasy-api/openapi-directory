import dataclasses



@dataclasses.dataclass
class GetLivenessPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
