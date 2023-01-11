import dataclasses



@dataclasses.dataclass
class SubmissionsOptionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
