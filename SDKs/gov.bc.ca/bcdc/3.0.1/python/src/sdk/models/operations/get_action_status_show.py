import dataclasses



@dataclasses.dataclass
class GetActionStatusShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
