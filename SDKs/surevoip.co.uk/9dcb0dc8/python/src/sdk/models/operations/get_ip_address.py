import dataclasses



@dataclasses.dataclass
class GetIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
