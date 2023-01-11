import dataclasses



@dataclasses.dataclass
class GetSupportIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
