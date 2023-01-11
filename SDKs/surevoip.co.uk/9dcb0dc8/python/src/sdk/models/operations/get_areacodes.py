import dataclasses



@dataclasses.dataclass
class GetAreacodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
