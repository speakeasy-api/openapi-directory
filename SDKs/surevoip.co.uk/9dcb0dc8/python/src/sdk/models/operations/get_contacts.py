import dataclasses



@dataclasses.dataclass
class GetContactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
