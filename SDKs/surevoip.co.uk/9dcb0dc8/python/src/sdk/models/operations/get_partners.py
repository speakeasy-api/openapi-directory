import dataclasses



@dataclasses.dataclass
class GetPartnersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
