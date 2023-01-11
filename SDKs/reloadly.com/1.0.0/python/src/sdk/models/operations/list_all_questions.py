import dataclasses



@dataclasses.dataclass
class ListAllQuestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
