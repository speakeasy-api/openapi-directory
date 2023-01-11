import dataclasses



@dataclasses.dataclass
class SecretsChoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
