import dataclasses



@dataclasses.dataclass
class ChromecastIconResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
