import dataclasses



@dataclasses.dataclass
class GetOpenapi3JSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
