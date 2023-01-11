import dataclasses



@dataclasses.dataclass
class KeycloakListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
