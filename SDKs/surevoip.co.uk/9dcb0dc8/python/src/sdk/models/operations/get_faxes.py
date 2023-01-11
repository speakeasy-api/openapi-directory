import dataclasses



@dataclasses.dataclass
class GetFaxesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
