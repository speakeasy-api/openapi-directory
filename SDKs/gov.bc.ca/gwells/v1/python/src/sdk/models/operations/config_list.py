import dataclasses



@dataclasses.dataclass
class ConfigListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
