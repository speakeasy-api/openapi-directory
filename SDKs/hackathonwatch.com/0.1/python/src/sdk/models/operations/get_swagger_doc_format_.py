import dataclasses



@dataclasses.dataclass
class GetSwaggerDocFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
