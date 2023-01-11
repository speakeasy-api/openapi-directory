import dataclasses



@dataclasses.dataclass
class ExtrasCustomFieldChoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
