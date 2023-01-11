import dataclasses



@dataclasses.dataclass
class GetDescriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
