import dataclasses



@dataclasses.dataclass
class GetModelInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
