import dataclasses



@dataclasses.dataclass
class GetHostedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
