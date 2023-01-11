import dataclasses



@dataclasses.dataclass
class ListOfCtAsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
