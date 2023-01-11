import dataclasses



@dataclasses.dataclass
class SecretsGetSessionKeyCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
