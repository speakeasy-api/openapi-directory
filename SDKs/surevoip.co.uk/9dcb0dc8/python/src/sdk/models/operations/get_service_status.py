import dataclasses



@dataclasses.dataclass
class GetServiceStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
