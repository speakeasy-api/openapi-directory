import dataclasses



@dataclasses.dataclass
class DeleteSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
