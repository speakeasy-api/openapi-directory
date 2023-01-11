import dataclasses



@dataclasses.dataclass
class PostChargesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
