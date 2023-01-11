import dataclasses



@dataclasses.dataclass
class PostSupportEchoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
