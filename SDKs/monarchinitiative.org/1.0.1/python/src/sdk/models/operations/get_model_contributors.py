import dataclasses



@dataclasses.dataclass
class GetModelContributorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
