import dataclasses



@dataclasses.dataclass
class ExtrasScriptsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
