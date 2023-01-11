import dataclasses



@dataclasses.dataclass
class IpamChoicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
