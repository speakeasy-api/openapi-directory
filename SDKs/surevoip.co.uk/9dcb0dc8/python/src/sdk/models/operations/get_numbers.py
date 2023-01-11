import dataclasses



@dataclasses.dataclass
class GetNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
